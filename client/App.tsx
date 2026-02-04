import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import WebDesign from "./pages/WebDesign";
import WebDevelopment from "./pages/WebDevelopment";
import GraphicsDesign from "./pages/GraphicsDesign";
import PcBuilding from "./pages/PcBuilding";
import PcRepair from "./pages/PcRepair";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";



const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Your static routes */}
          <Route path="/" element={<Index />} />
          <Route path="/web-design" element={<WebDesign />} />
          <Route path="/web-development" element={<WebDevelopment />} />
          <Route path="/graphics-design" element={<GraphicsDesign />} />
          <Route path="/pc-building" element={<PcBuilding />} />
          <Route path="/pc-repair" element={<PcRepair />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />



          {/* Fallback 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
