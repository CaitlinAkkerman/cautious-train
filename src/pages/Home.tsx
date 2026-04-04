import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  color: string;
  path: string;
}

const projects: Project[] = [
  {
    id: "synced",
    title: "Synced",
    description: "Full-stack period tracking app with cycle predictions, household management, and data export features. Built with React, Node.js, and SQLite.",
    tags: ["React", "Node.js", "SQLite", "Full-Stack"],
    color: "#FF6B9D",
    path: "/home/workspace/Synced",
  },
  {
    id: "bill-tracker",
    title: "Bill Tracker",
    description: "React bill tracking app with Firebase Auth, partial payment support, and progress visualization. Dark, bold UI design.",
    tags: ["React", "Firebase", "Auth"],
    color: "#4ECDC4",
    path: "/home/workspace/bill-tracker",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="group relative overflow-hidden border-0 bg-transparent transition-all duration-300 cursor-pointer"
      style={{
        transform: isHovered ? "translateY(-8px)" : "translateY(0)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient background */}
      <div
        className="absolute inset-0 rounded-xl transition-opacity duration-300"
        style={{
          background: `linear-gradient(135deg, ${project.color}20, transparent)`,
          opacity: isHovered ? 1 : 0.5,
        }}
      />

      {/* Left accent bar */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl transition-all duration-300"
        style={{
          backgroundColor: project.color,
          width: isHovered ? "4px" : "2px",
        }}
      />

      <CardHeader className="relative z-10 pb-2">
        <div className="flex items-center gap-3">
          <span
            className="text-4xl font-black"
            style={{ color: project.color }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <CardTitle className="text-2xl font-bold tracking-tight">
            {project.title}
          </CardTitle>
        </div>
      </CardHeader>

      <CardContent className="relative z-10">
        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="font-medium"
              style={{
                borderColor: `${project.color}40`,
                color: project.color,
              }}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default function Home() {
  const colors = ["#FF6B9D", "#4ECDC4", "#FFE66D", "#95E1D3", "#F38181"];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative px-6 py-24 md:py-32 lg:py-40">
        <div className="max-w-4xl mx-auto">
          {/* Decorative elements */}
          <div className="absolute top-20 right-10 w-32 h-32 rounded-full blur-3xl opacity-30" style={{ backgroundColor: colors[0] }} />
          <div className="absolute bottom-20 left-10 w-40 h-40 rounded-full blur-3xl opacity-20" style={{ backgroundColor: colors[1] }} />

          {/* Main heading */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6">
            <span className="block">Some</span>
            <span className="block" style={{ color: colors[0] }}>Stuff</span>
            <span className="block">and a Few</span>
            <span className="block" style={{ color: colors[1] }}>Things</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
            A collection of coding projects, certificates, and other things. Made with curiosity, some breakdowns, and the occasional breakthrough.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-12">
            Selected Work
          </h2>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Preview Section */}
      <section className="px-6 py-16 border-t border-border/50">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <Award className="w-8 h-8 text-yellow-500" />
              <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
                Certifications
              </h2>
            </div>
            <Link
              to="/certificates"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-yellow-500 transition-colors"
            >
              View All
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <Card className="border-0 bg-transparent relative overflow-hidden">
            <div
              className="absolute inset-0 rounded-xl"
              style={{
                background: "linear-gradient(135deg, rgba(66, 133, 244, 0.1), transparent)",
              }}
            />
            <CardContent className="relative z-10 py-6">
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: "#4285F420" }}>
                    <Award className="w-6 h-6" style={{ color: "#4285F4" }} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Google Data Analytics</h3>
                    <p className="text-sm text-muted-foreground">Professional Certificate</p>
                  </div>
                </div>
                <div className="flex-1" />
                <Badge variant="outline" className="w-fit font-medium border-yellow-500/30 text-yellow-500">
                  7 Courses Completed
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-16 text-center border-t border-border/50">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center gap-2 mb-4">
            {colors.map((color, i) => (
              <div
                key={i}
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            More coming soon. This is just the beginning.
          </p>
        </div>
      </footer>
    </div>
  );
}
