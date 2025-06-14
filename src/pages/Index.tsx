
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { CryptoCalculator } from "@/components/CryptoCalculator";
import { PriceTracker } from "@/components/PriceTracker";
import { PopularArticles } from "@/components/PopularArticles";
import { ScamAlerts } from "@/components/ScamAlerts";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Header />
      <Hero />
      <PriceTracker />
      <Features />
      <CryptoCalculator />
      <PopularArticles />
      <ScamAlerts />
      <NewsletterSignup />
      <Footer />
    </div>
  );
};

export default Index;
