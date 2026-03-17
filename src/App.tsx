import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Index from "./pages/Principal";

// Lazy load de todas as páginas secundárias para reduzir o bundle inicial
const Ministerios = lazy(() => import("./pages/Ministerios"));
const Sermons = lazy(() => import("./pages/Sermoes"));
const Doacoes = lazy(() => import("./pages/Doacoes"));
const Contato = lazy(() => import("./pages/Contato"));
const QuemSomos = lazy(() => import("./pages/QuemSomos"));
const Cultos = lazy(() => import("./pages/Cultos"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

// Fallback minimalista durante carregamento de páginas
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="w-8 h-8 border-2 border-church-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
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
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
