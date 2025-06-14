
import { useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { AlertTriangle, Shield, Users, Search, Clock, TrendingUp } from "lucide-react";

export const ScamAlerts = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const recentScams = [
    {
      id: 1,
      title: "Fake Bitcoin Investment Platform",
      description: "Beware of 'CryptoProfitKE' promising 300% returns in 30 days",
      date: "2 days ago",
      severity: "high",
      scammerInfo: "Website: cryptoprofitke.com (FAKE)",
      amount: "KES 2.5M stolen from 45 victims"
    },
    {
      id: 2,
      title: "WhatsApp P2P Trader Scam",
      description: "Person using number +254722***456 taking payments but not sending crypto",
      date: "1 week ago", 
      severity: "high",
      scammerInfo: "Number: 0722***456, Name: John M.",
      amount: "KES 890K reported losses"
    },
    {
      id: 3,
      title: "Fake Binance Support",
      description: "Scammers impersonating Binance support asking for verification codes",
      date: "3 days ago",
      severity: "medium",
      scammerInfo: "Email: support@binnance.com (note the typo)",
      amount: "Multiple accounts compromised"
    },
    {
      id: 4,
      title: "Telegram Investment Group",
      description: "Fake crypto trading signals charging 'VIP membership' fees",
      date: "5 days ago",
      severity: "medium", 
      scammerInfo: "Telegram: @CryptoSignalsKE",
      amount: "KES 450K in membership fees"
    }
  ];

  const safetyTips = [
    {
      title: "Verify Before You Send",
      tip: "Always confirm recipient details through multiple channels",
      icon: "🔍"
    },
    {
      title: "Too Good = Too Bad",
      tip: "If returns sound too good to be true, they probably are",
      icon: "⚠️"
    },
    {
      title: "Never Share Private Keys",
      tip: "Legitimate services never ask for wallet private keys",
      icon: "🔐"
    },
    {
      title: "Use Escrow for P2P",
      tip: "Only trade P2P through platforms with escrow protection",
      icon: "🛡️"
    },
    {
      title: "Check URLs Carefully",
      tip: "Scammers use similar-looking domain names",
      icon: "🌐"
    },
    {
      title: "Small Test Transactions",
      tip: "Always start with small amounts when trying new services",
      icon: "💰"
    }
  ];

  const filteredScams = recentScams.filter(scam => 
    scam.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    scam.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <Shield className="h-10 w-10 text-red-500" />
            🚨 Live Scam Alert Hub
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Stay protected from crypto scams targeting Kenyans. Real-time alerts, verified reports, and community protection.
          </p>
          
          {/* Live Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mt-8">
            <div className="bg-red-950/30 border border-red-500/30 rounded-lg p-3">
              <div className="text-red-400 text-2xl font-bold">47</div>
              <div className="text-slate-300 text-xs">Active Scams</div>
            </div>
            <div className="bg-green-950/30 border border-green-500/30 rounded-lg p-3">
              <div className="text-green-400 text-2xl font-bold">2.3K+</div>
              <div className="text-slate-300 text-xs">Users Protected</div>
            </div>
            <div className="bg-blue-950/30 border border-blue-500/30 rounded-lg p-3">
              <div className="text-blue-400 text-2xl font-bold">890K</div>
              <div className="text-slate-300 text-xs">KES Saved</div>
            </div>
            <div className="bg-orange-950/30 border border-orange-500/30 rounded-lg p-3">
              <div className="text-orange-400 text-2xl font-bold">156</div>
              <div className="text-slate-300 text-xs">Active Reporters</div>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Search scam reports..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-slate-800 border-slate-600 text-white"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Recent Scam Alerts */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
              <AlertTriangle className="h-6 w-6 text-red-500" />
              Latest Scam Reports
              <span className="text-sm bg-red-500/20 text-red-400 px-2 py-1 rounded ml-2">
                LIVE
              </span>
            </h3>
            
            <div className="space-y-4">
              {filteredScams.map((scam) => (
                <Alert key={scam.id} className={`border-2 transition-all duration-200 hover:scale-102 ${
                  scam.severity === 'high' 
                    ? 'border-red-500/50 bg-red-950/30 hover:border-red-500' 
                    : 'border-yellow-500/50 bg-yellow-950/30 hover:border-yellow-500'
                }`}>
                  <AlertTriangle className="h-4 w-4" />
                  <AlertTitle className="text-white flex items-center justify-between">
                    {scam.title}
                    <div className="flex items-center gap-2">
                      <span className={`text-xs px-2 py-1 rounded ${
                        scam.severity === 'high' ? 'bg-red-600 text-white' : 'bg-yellow-600 text-white'
                      }`}>
                        {scam.severity.toUpperCase()}
                      </span>
                      <div className="flex items-center gap-1 text-xs text-slate-400">
                        <Clock className="h-3 w-3" />
                        {scam.date}
                      </div>
                    </div>
                  </AlertTitle>
                  <AlertDescription className="text-slate-300">
                    <div className="space-y-3 mt-2">
                      <p>{scam.description}</p>
                      <div className="bg-slate-900/50 p-3 rounded">
                        <p className="text-sm"><strong className="text-red-400">Scammer Info:</strong> {scam.scammerInfo}</p>
                        <p className="text-sm mt-1"><strong className="text-orange-400">Total Damage:</strong> {scam.amount}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="text-red-400 border-red-400 hover:bg-red-400 hover:text-white">
                          Report Similar
                        </Button>
                        <Button size="sm" variant="ghost" className="text-slate-400 hover:text-white">
                          Share Warning
                        </Button>
                      </div>
                    </div>
                  </AlertDescription>
                </Alert>
              ))}
            </div>
            
            <div className="mt-6 flex gap-4">
              <Button className="bg-red-600 hover:bg-red-700">
                🚨 Report New Scam
              </Button>
              <Button variant="outline" className="border-slate-600 text-slate-300">
                View All Alerts
              </Button>
            </div>
          </div>

          {/* Safety Tips & Tools */}
          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-green-950/30 to-blue-950/30 border-green-500/30">
              <CardHeader>
                <CardTitle className="text-green-400 flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Quick Safety Tips
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {safetyTips.map((tip, index) => (
                    <div key={index} className="flex items-start gap-3 p-2 rounded hover:bg-slate-800/30 transition-colors">
                      <span className="text-lg">{tip.icon}</span>
                      <div>
                        <div className="text-white text-sm font-medium">{tip.title}</div>
                        <div className="text-slate-400 text-xs">{tip.tip}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/60 border-orange-500/30">
              <CardHeader>
                <CardTitle className="text-orange-400 flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Community Protection
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-slate-300 text-sm">
                  Join our active community of 5,000+ Kenyans sharing real-time scam alerts and safety tips.
                </div>
                
                <div className="space-y-2">
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700">
                    Join Telegram Group
                  </Button>
                  <Button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700">
                    Join WhatsApp Group
                  </Button>
                </div>

                <div className="bg-slate-800/50 p-3 rounded mt-4">
                  <h4 className="text-orange-400 text-sm font-semibold mb-2 flex items-center gap-1">
                    <TrendingUp className="h-3 w-3" />
                    This Week's Impact
                  </h4>
                  <div className="space-y-1 text-xs text-slate-300">
                    <div>• 12 new scam reports submitted</div>
                    <div>• 340+ users warned before sending money</div>
                    <div>• KES 1.2M+ potentially saved</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-950/30 to-pink-950/30 border-purple-500/30">
              <CardHeader>
                <CardTitle className="text-purple-400">🔍 Scam Checker Tool</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Input 
                    placeholder="Enter phone number, website, or name"
                    className="bg-slate-800 border-slate-600 text-white"
                  />
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    Check for Scam Reports
                  </Button>
                  <div className="text-xs text-slate-400">
                    Instantly check if a trader or platform has been reported for suspicious activity.
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
