import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { Layout } from "./components/Layout";
import { useSwipeable } from "react-swipeable";

import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import WhyChoose from "./pages/WhyChoose";
import Process from "./pages/Process";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

/* Swipe Navigation Component */
function SwipeHandler({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();

  const handlers = useSwipeable({
    onSwipedRight: () => {
      navigate("/contact"); // Right swipe → Contact page
    },
    onSwipedLeft: () => {
      navigate(-1); // Left swipe → Go back
    },
    trackMouse: true,
  });

  return <div {...handlers}>{children}</div>;
}

const AppRoutes = () => {
  return (
    <SwipeHandler>
      <Layout>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/why-bridgeone" element={<WhyChoose />} />
          <Route path="/process" element={<Process />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </SwipeHandler>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;