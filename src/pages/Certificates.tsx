import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, ExternalLink, ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface Certificate {
  id: string;
  title: string;
  filename: string;
  color: string;
  description: string;
}

const certificates: Certificate[] = [
  {
    id: "foundations",
    title: "Foundations: Data, Data, Everywhere",
    filename: "foundations_cert.pdf",
    color: "#4285F4",
    description: "Core principles of data analytics and the data analysis process.",
  },
  {
    id: "prepare",
    title: "Prepare Data for Exploration",
    filename: "prepare_data_cert.pdf",
    color: "#34A853",
    description: "Data collection, organization, and preparation techniques.",
  },
  {
    id: "process",
    title: "Process Data from Dirty to Clean",
    filename: "process_data_cert.pdf",
    color: "#FBBC04",
    description: "Data cleaning, validation, and integrity best practices.",
  },
  {
    id: "query",
    title: "Query Databases with SQL",
    filename: "querying_databases_cert.pdf",
    color: "#EA4335",
    description: "SQL fundamentals for data extraction and manipulation.",
  },
  {
    id: "analyze",
    title: "Analyze Data to Answer Questions",
    filename: "analyza_data_cert.pdf",
    color: "#9C27B0",
    description: "Statistical analysis and data interpretation methods.",
  },
  {
    id: "visualize",
    title: "Share Data Through the Art of Visualization",
    filename: "charts_dashboards_cert.pdf",
    color: "#FF6D00",
    description: "Creating compelling charts, dashboards, and data stories.",
  },
  {
    id: "decisions",
    title: "Data Analysis with R Programming",
    filename: "data_driven_decisions_cert.pdf",
    color: "#00ACC1",
    description: "R programming for advanced data analysis and modeling.",
  },
];

function CertificateCard({ cert, index }: { cert: Certificate; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="group relative overflow-hidden border-0 bg-transparent transition-all duration-300"
      style={{
        transform: isHovered ? "translateY(-4px)" : "translateY(0)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="absolute inset-0 rounded-xl transition-opacity duration-300"
        style={{
          background: `linear-gradient(135deg, ${cert.color}15, transparent)`,
          opacity: isHovered ? 1 : 0.5,
        }}
      />

      <div
        className="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl transition-all duration-300"
        style={{
          backgroundColor: cert.color,
          width: isHovered ? "4px" : "2px",
        }}
      />

      <CardHeader className="relative z-10 pb-2">
        <div className="flex items-center gap-3">
          <Award className="w-8 h-8" style={{ color: cert.color }} />
          <CardTitle className="text-xl font-bold tracking-tight">
            {cert.title}
          </CardTitle>
        </div>
      </CardHeader>

      <CardContent className="relative z-10">
        <p className="text-muted-foreground leading-relaxed mb-4">
          {cert.description}
        </p>

        <a
          href={`/api/certificates/${cert.filename}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:opacity-80"
          style={{ color: cert.color }}
        >
          <ExternalLink className="w-4 h-4" />
          View Certificate
        </a>
      </CardContent>
    </Card>
  );
}

export default function Certificates() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="px-6 py-8 border-b border-border/50">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            Back to Portfolio
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <Award className="w-12 h-12 text-yellow-500" />
            <Badge variant="outline" className="font-medium">
              Google Career Certificates
            </Badge>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-6">
            <span className="block">Data Analytics</span>
            <span className="block" style={{ color: "#4285F4" }}>Certificates</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
            Seven-course professional certificate program covering the complete data analysis workflow from raw data to actionable insights.
          </p>
        </div>
      </section>

      {/* Certificates Grid */}
      <section className="px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-8">
            All Certificates ({certificates.length})
          </h2>

          <div className="grid gap-6">
            {certificates.map((cert, index) => (
              <CertificateCard key={cert.id} cert={cert} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-16 text-center border-t border-border/50">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-muted-foreground">
            Google Data Analytics Professional Certificate • Coursera
          </p>
        </div>
      </footer>
    </div>
  );
}