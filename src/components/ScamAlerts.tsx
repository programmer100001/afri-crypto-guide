
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Shield, Users } from "lucide-react";

export const ScamAlerts = () => {
  const recentScams = [
    {
      title: "Fake Bitcoin Investment Platform",
      description: "Beware of 'CryptoProfitKE' promising 300% returns in 30 days",
      date: "2 days ago",
      severity: "high"
    },
    {
      title: "WhatsApp Investment Groups",
      description: "Scammers creating fake crypto trading signal groups",
      date: "1 week ago",
      severity: "medium"
    },
    {
      title: "Phishing Binance Emails",
      description: "Fake emails asking for verification with suspicious links",
      date: "3 days ago",
      severity: "high"
    }
  ];

  const safetyTips = [
    "Never invest more than you can afford to lose",
    "Always verify exchange URLs before logging in",
    "Use hardware wallets for large amounts",
    "Never share your private keys or seed phrases"
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <Shield className="h-10 w-10 text-orange-500" />
            Scam Alerts & Safety Hub
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Stay protected from crypto scams targeting Kenyans. Report suspicious activities and learn safety tips.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Recent Scam Alerts */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
              <AlertTriangle className="h-6 w-6 text-red-500" />
              Recent Scam Alerts
            </h3>
            <div className="space-y-4">
              {recentScams.map((scam, index) => (
                <Alert key={index} className={`border-2 ${
                  scam.severity === 'high' 
                    ? 'border-red-500 bg-red-500/10' 
                    : 'border-yellow-500 bg-yellow-500/10'
                }`}>
                  <AlertTriangle className="h-4 w-4" />
                  <AlertTitle className="text-white">{scam.title}</AlertTitle>
                  <AlertDescription className="text-slate-300">
                    {scam.description}
                    <div className="text-xs text-slate-400 mt-2">{scam.date}</div>
                  </AlertDescription>
                </Alert>
              ))}
            </div>
            
            <div className="mt-6 flex gap-4">
              <Button className="bg-red-600 hover:bg-red-700">
                Report a Scam
              </Button>
              <Button variant="outline" className="border-slate-600 text-slate-300">
                View All Alerts
              </Button>
            </div>
          </div>

          {/* Safety Tips */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
              <Shield className="h-6 w-6 text-green-500" />
              Safety Tips
            </h3>
            
            <Card className="bg-slate-900/60 border-slate-700 mb-6">
              <CardHeader>
                <CardTitle className="text-green-500">Essential Safety Rules</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {safetyTips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-3 text-slate-300">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      {tip}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/60 border-slate-700">
              <CardHeader>
                <CardTitle className="text-orange-500 flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Community Protection
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 mb-4">
                  Join our Telegram group where 5,000+ Kenyans share scam alerts and safety tips in real-time.
                </p>
                <Button className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600">
                  Join Telegram Group
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
