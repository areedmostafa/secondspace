import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CaseStudies from "./pages/CaseStudies";
import Portfolio from "./pages/Portfolio";
import Videos from "./pages/Videos";
import ShortFormVideos from "./pages/ShortFormVideos";
import PromoVideos from "./pages/PromoVideos";
import MotionGraphics from "./pages/MotionGraphics";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/videos" element={<Videos />} />
          <Route path="/portfolio/videos/short-form" element={<ShortFormVideos />} />
          <Route path="/portfolio/videos/promo" element={<PromoVideos />} />
          <Route path="/portfolio/videos/motion-graphics" element={<MotionGraphics />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
