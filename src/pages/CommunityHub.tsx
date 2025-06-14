
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScamAlertBoard } from "@/components/ScamAlertBoard";
import { TaxCalculator } from "@/components/TaxCalculator";
import { WalletQuiz } from "@/components/WalletQuiz";
import { UserStories } from "@/components/UserStories";
import { CommunityForum } from "@/components/CommunityForum";

const CommunityHub = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Header />
      
      <main className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Community Hub & Advanced Tools
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Interactive tools, success stories, and community-driven safety features for Kenyan crypto users.
            </p>
          </div>
        </div>
      </main>

      <ScamAlertBoard />
      <TaxCalculator />
      <WalletQuiz />
      <UserStories />
      <CommunityForum />
      
      <Footer />
    </div>
  );
};

export default CommunityHub;
