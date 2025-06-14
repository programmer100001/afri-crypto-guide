
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Send, CheckCircle, TrendingUp } from "lucide-react";

export const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [interests, setInterests] = useState<string[]>([]);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log("Newsletter subscription:", { email, interests });
      setIsSubscribed(true);
      // In real app, send to backend
    }
  };

  const toggleInterest = (interest: string) => {
    setInterests(prev => 
      prev.includes(interest) 
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    );
  };

  const interestOptions = [
    { id: "beginner", label: "Beginner Guides", icon: "📚" },
    { id: "market", label: "Market Updates", icon: "📊" },
    { id: "security", label: "Security Tips", icon: "🔒" },
    { id: "local", label: "Kenya Crypto News", icon: "🇰🇪" },
    { id: "tools", label: "New Tools & Reviews", icon: "🛠️" },
    { id: "scam", label: "Scam Alerts", icon: "🚨" }
  ];

  if (isSubscribed) {
    return (
      <section className="py-20 px-4 bg-gradient-to-r from-green-900/30 to-blue-900/30">
        <div className="container mx-auto max-w-2xl text-center">
          <Card className="bg-green-950/30 border-green-500/50">
            <CardContent className="p-8">
              <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">
                🎉 Welcome to the CryptoKenya Community!
              </h3>
              <p className="text-slate-300 mb-6">
                You're now part of 5,000+ Kenyans staying ahead in crypto. 
                Check your email for our exclusive starter guide!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-green-600 hover:bg-green-700">
                  Join Our Telegram
                </Button>
                <Button variant="outline" className="border-green-500 text-green-400">
                  Download Free Guide
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-orange-900/30 to-purple-900/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <Mail className="h-10 w-10 text-orange-500" />
            📬 Stay Ahead in Crypto
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Join 5,000+ Kenyans getting exclusive crypto insights, scam alerts, and market opportunities delivered weekly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Newsletter Form */}
          <Card className="bg-slate-900/60 border-slate-700">
            <CardHeader>
              <CardTitle className="text-orange-500 flex items-center gap-2">
                <Send className="h-5 w-5" />
                Free Weekly Newsletter
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubscribe} className="space-y-6">
                <div>
                  <label className="text-slate-300 text-sm block mb-2">Email Address</label>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="bg-slate-800 border-slate-600 text-white"
                    required
                  />
                </div>

                <div>
                  <label className="text-slate-300 text-sm block mb-3">What interests you most? (Optional)</label>
                  <div className="grid grid-cols-2 gap-2">
                    {interestOptions.map((option) => (
                      <button
                        key={option.id}
                        type="button"
                        onClick={() => toggleInterest(option.id)}
                        className={`p-2 rounded text-xs text-left transition-all ${
                          interests.includes(option.id)
                            ? 'bg-orange-500/20 border border-orange-500/50 text-orange-300'
                            : 'bg-slate-800 border border-slate-600 text-slate-300 hover:border-orange-500/30'
                        }`}
                      >
                        <span className="mr-1">{option.icon}</span>
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>

                <Button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600">
                  Get Free Crypto Insights
                </Button>
              </form>

              <div className="mt-4 text-xs text-slate-400 text-center">
                🔒 Your email is safe • No spam • Unsubscribe anytime
              </div>
            </CardContent>
          </Card>

          {/* What You'll Get */}
          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-blue-950/30 to-purple-950/30 border-blue-500/30">
              <CardHeader>
                <CardTitle className="text-blue-400">📊 What You'll Receive</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-orange-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-orange-400 text-sm">📈</span>
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Weekly Market Insights</h4>
                      <p className="text-slate-400 text-sm">BTC/ETH trends, best buying opportunities, local price analysis</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-red-400 text-sm">🚨</span>
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Instant Scam Alerts</h4>
                      <p className="text-slate-400 text-sm">New scams targeting Kenyans, how to stay protected</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-green-400 text-sm">🇰🇪</span>
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Kenya-Specific News</h4>
                      <p className="text-slate-400 text-sm">Regulation updates, tax changes, local exchange news</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-purple-400 text-sm">🎁</span>
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Exclusive Resources</h4>
                      <p className="text-slate-400 text-sm">Free guides, tools, early access to new features</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/60 border-slate-700">
              <CardHeader>
                <CardTitle className="text-green-400 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Community Stats
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-green-400">5,000+</div>
                    <div className="text-slate-400 text-sm">Subscribers</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-400">47</div>
                    <div className="text-slate-400 text-sm">Issues Sent</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-orange-400">890K</div>
                    <div className="text-slate-400 text-sm">KES Saved</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-400">4.9★</div>
                    <div className="text-slate-400 text-sm">Rating</div>
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-slate-800/50 rounded">
                  <div className="text-green-400 text-sm font-medium mb-1">💬 Recent Feedback:</div>
                  <div className="text-slate-300 text-xs italic">
                    "This newsletter helped me avoid a KES 500K scam last month. Pure gold!" - Sarah M.
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
