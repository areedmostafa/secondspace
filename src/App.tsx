import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import CaseStudies from "./pages/CaseStudies";
import Portfolio from "./pages/Portfolio";
import Videos from "./pages/Videos";
import ShortFormVideos from "./pages/ShortFormVideos";
import PromoVideos from "./pages/PromoVideos";
import MotionGraphics from "./pages/MotionGraphics";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import AboutUs from "./pages/AboutUs";
import NotFound from "./pages/NotFound";
import SocialMediaManagement from "./pages/services/SocialMediaManagement";
import PaidAdvertising from "./pages/services/PaidAdvertising";
import WebDevelopment from "./pages/services/WebDevelopment";
import AppDevelopment from "./pages/services/AppDevelopment";
import SoftwareDevelopment from "./pages/services/SoftwareDevelopment";
import UIUXDesign from "./pages/services/UIUXDesign";
import VideoEditing from "./pages/services/VideoEditing";
import GraphicsDesign from "./pages/services/GraphicsDesign";
import AIAutomation from "./pages/services/AIAutomation";
import StrategyConsulting from "./pages/services/StrategyConsulting";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="dark" storageKey="secondspace-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/videos" element={<Videos />} />
            <Route path="/portfolio/videos/short-form" element={<ShortFormVideos />} />
            <Route path="/portfolio/videos/promo" element={<PromoVideos />} />
            <Route path="/portfolio/videos/motion-graphics" element={<MotionGraphics />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/services/social-media-management" element={<SocialMediaManagement />} />
            <Route path="/services/paid-advertising" element={<PaidAdvertising />} />
            <Route path="/services/web-development" element={<WebDevelopment />} />
            <Route path="/services/app-development" element={<AppDevelopment />} />
            <Route path="/services/software-development" element={<SoftwareDevelopment />} />
            <Route path="/services/ui-ux-design" element={<UIUXDesign />} />
            <Route path="/services/video-editing" element={<VideoEditing />} />
            <Route path="/services/graphics-design" element={<GraphicsDesign />} />
            <Route path="/services/ai-automation" element={<AIAutomation />} />
            <Route path="/services/strategy-consulting" element={<StrategyConsulting />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
