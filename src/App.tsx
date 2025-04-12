
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import RegisterModal from "./components/RegisterModal";

const queryClient = new QueryClient();

const App = () => {
  const [showRegister, setShowRegister] = useState(false);
  
  useEffect(() => {
    // Check if user has already registered
    const userData = localStorage.getItem("dreamStairsUser");
    
    // If no user data found, show registration modal
    if (!userData) {
      // Small delay to ensure the app is loaded first
      const timer = setTimeout(() => {
        setShowRegister(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <RegisterModal 
            isOpen={showRegister} 
            onClose={() => setShowRegister(false)} 
          />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
