
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Crypto101 from "./pages/Crypto101";
import BuyCryptoKenya from "./pages/BuyCryptoKenya";
import WalletsSecurity from "./pages/WalletsSecurity";
import ExchangeReviews from "./pages/ExchangeReviews";
import LocalInsights from "./pages/LocalInsights";
import CommunityHub from "./pages/CommunityHub";
import Admin from "./pages/Admin";
import Profile from "./pages/Profile";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/crypto-101" element={<Crypto101 />} />
            <Route path="/buy-crypto-kenya" element={<BuyCryptoKenya />} />
            <Route path="/wallets-security" element={<WalletsSecurity />} />
            <Route path="/exchange-reviews" element={<ExchangeReviews />} />
            <Route path="/local-insights" element={<LocalInsights />} />
            <Route path="/community-hub" element={<CommunityHub />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/profile" element={<Profile />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
