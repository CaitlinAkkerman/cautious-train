import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Certificates from "./pages/Certificates";
import { ThemeProvider } from "@/components/theme-provider";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/certificates" element={<Certificates />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
