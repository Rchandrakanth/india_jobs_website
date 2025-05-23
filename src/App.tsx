
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ITJobs from "./pages/ITJobs";
import GovernmentJobs from "./pages/GovernmentJobs";
import NonITJobs from "./pages/NonITJobs";
import StateJobs from "./pages/StateJobs";
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
          <Route path="/it-jobs" element={<ITJobs />} />
          <Route path="/government-jobs" element={<GovernmentJobs />} />
          <Route path="/non-it-jobs" element={<NonITJobs />} />
          <Route path="/state-jobs" element={<StateJobs />} />
          <Route path="/state-jobs/:state" element={<StateJobs />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
