import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Principal";
import Ministerios from "./pages/Ministerios";
import Sermons from "./pages/Sermoes";
import Doacoes from "./pages/Doacoes";
import Contato from "./pages/Contato";
import QuemSomos from "./pages/QuemSomos";
import Cultos from "./pages/Cultos";
import NotFound from "./pages/NotFound";
// import do ReactPlayer removido, pois não é necessário aqui

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sermoes" element={<Sermons />} />
          <Route path="/ministerios" element={<Ministerios />} />
          <Route path="/quem-somos" element={<QuemSomos />} />
          <Route path="/cultos" element={<Cultos />} />
          <Route path="/doacoes" element={<Doacoes />} />
          <Route path="/contato" element={<Contato />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
