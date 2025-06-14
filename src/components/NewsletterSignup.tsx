
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const NewsletterSignup = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-2xl p-8 md:p-12 border border-orange-500/20">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Updated with Crypto Kenya
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Get weekly crypto insights, market updates, and educational content delivered to your inbox.
              Join 5,000+ Kenyan crypto enthusiasts.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email address"
                className="bg-slate-800 border-slate-600 text-white placeholder:text-slate-400 flex-1"
              />
              <Button className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 px-8">
                Subscribe
              </Button>
            </div>
            
            <p className="text-sm text-slate-400 mt-4">
              No spam. Unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
