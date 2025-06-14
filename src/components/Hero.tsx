
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Master Crypto
            <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
              {" "}Safely{" "}
            </span>
            in Kenya
          </h1>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            Learn cryptocurrency from scratch with guides tailored for Kenyan investors. 
            Understand Bitcoin, buy safely with M-Pesa, and protect your investments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-lg px-8 py-4">
              Start Learning Free
            </Button>
            <Button size="lg" variant="outline" className="border-slate-400 text-slate-300 hover:bg-slate-800 text-lg px-8 py-4">
              Watch Demo
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm">
              <div className="text-3xl font-bold text-orange-500 mb-2">10K+</div>
              <div className="text-slate-300">Students Educated</div>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm">
              <div className="text-3xl font-bold text-orange-500 mb-2">50+</div>
              <div className="text-slate-300">Expert Guides</div>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm">
              <div className="text-3xl font-bold text-orange-500 mb-2">24/7</div>
              <div className="text-slate-300">Community Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
