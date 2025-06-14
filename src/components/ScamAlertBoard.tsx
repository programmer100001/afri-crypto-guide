
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle, Shield, Clock, Users } from "lucide-react";

export const ScamAlertBoard = () => {
  const [reportForm, setReportForm] = useState({
    scammerName: "",
    platform: "",
    description: "",
    evidence: ""
  });

  const recentScams = [
    {
      id: 1,
      scammerName: "John M. (0722***456)",
      platform: "WhatsApp P2P",
      description: "Promised 300% returns in 24 hours, disappeared after receiving payment",
      dateReported: "2024-01-10",
      verified: true
    },
    {
      id: 2,
      scammerName: "CryptoProfitKE",
      platform: "Telegram",
      description: "Fake investment group charging 'activation fees'",
      dateReported: "2024-01-08",
      verified: true
    },
    {
      id: 3,
      scammerName: "BitcoinMasterKE",
      platform: "Instagram",
      description: "Selling fake crypto courses, no delivery after payment",
      dateReported: "2024-01-05",
      verified: false
    }
  ];

  const handleSubmitReport = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Scam report submitted:", reportForm);
    // In real app, send to backend
    alert("Thank you for your report! We'll review it within 24 hours.");
    setReportForm({ scammerName: "", platform: "", description: "", evidence: "" });
  };

  return (
    <section className="py-20 px-4 bg-red-950/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <AlertTriangle className="h-10 w-10 text-red-500" />
            🚨 Live Scam Alert Board
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Protect the Kenyan crypto community. Report scammers and check this list before trading.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Scam Reports */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
              <Shield className="h-6 w-6 text-red-500" />
              Recently Reported Scammers
            </h3>
            
            <div className="space-y-4">
              {recentScams.map((scam) => (
                <Alert key={scam.id} className="border-red-500/30 bg-red-950/30">
                  <AlertTriangle className="h-4 w-4 text-red-500" />
                  <AlertTitle className="text-white flex items-center justify-between">
                    {scam.scammerName}
                    <span className={`text-xs px-2 py-1 rounded ${
                      scam.verified ? 'bg-red-600 text-white' : 'bg-yellow-600 text-white'
                    }`}>
                      {scam.verified ? 'VERIFIED' : 'PENDING'}
                    </span>
                  </AlertTitle>
                  <AlertDescription className="text-slate-300">
                    <div className="space-y-2">
                      <p><strong>Platform:</strong> {scam.platform}</p>
                      <p><strong>Scam:</strong> {scam.description}</p>
                      <div className="flex items-center gap-2 text-xs text-slate-400">
                        <Clock className="h-3 w-3" />
                        Reported: {scam.dateReported}
                      </div>
                    </div>
                  </AlertDescription>
                </Alert>
              ))}
            </div>

            <div className="mt-6 p-4 bg-green-950/30 border border-green-500/30 rounded-lg">
              <h4 className="text-green-400 font-semibold mb-2 flex items-center gap-2">
                <Users className="h-4 w-4" />
                Community Stats
              </h4>
              <div className="grid grid-cols-2 gap-4 text-sm text-slate-300">
                <div>Scams Reported: <span className="text-white font-bold">47</span></div>
                <div>Users Protected: <span className="text-white font-bold">2,300+</span></div>
                <div>Money Saved: <span className="text-white font-bold">KES 890K+</span></div>
                <div>Active Reporters: <span className="text-white font-bold">156</span></div>
              </div>
            </div>
          </div>

          {/* Report Form */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">
              Report a Scammer
            </h3>
            
            <Card className="bg-slate-900/60 border-slate-700">
              <CardHeader>
                <CardTitle className="text-orange-500">Help Protect Others</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmitReport} className="space-y-4">
                  <div>
                    <label className="text-slate-300 text-sm block mb-2">
                      Scammer Name/Phone/Username *
                    </label>
                    <Input
                      value={reportForm.scammerName}
                      onChange={(e) => setReportForm({...reportForm, scammerName: e.target.value})}
                      className="bg-slate-800 border-slate-600 text-white"
                      placeholder="e.g. John M. (0722***456)"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-slate-300 text-sm block mb-2">
                      Platform Used *
                    </label>
                    <Input
                      value={reportForm.platform}
                      onChange={(e) => setReportForm({...reportForm, platform: e.target.value})}
                      className="bg-slate-800 border-slate-600 text-white"
                      placeholder="e.g. WhatsApp, Telegram, Instagram"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-slate-300 text-sm block mb-2">
                      What Happened? *
                    </label>
                    <Textarea
                      value={reportForm.description}
                      onChange={(e) => setReportForm({...reportForm, description: e.target.value})}
                      className="bg-slate-800 border-slate-600 text-white"
                      placeholder="Describe the scam attempt, what they promised, how much was involved..."
                      rows={4}
                      required
                    />
                  </div>

                  <div>
                    <label className="text-slate-300 text-sm block mb-2">
                      Evidence (Screenshots, Links, etc.)
                    </label>
                    <Textarea
                      value={reportForm.evidence}
                      onChange={(e) => setReportForm({...reportForm, evidence: e.target.value})}
                      className="bg-slate-800 border-slate-600 text-white"
                      placeholder="Share any evidence links, describe screenshots you have..."
                      rows={2}
                    />
                  </div>

                  <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
                    Submit Scam Report
                  </Button>
                </form>

                <div className="mt-4 text-xs text-slate-400">
                  <p>🔒 Reports are reviewed within 24 hours</p>
                  <p>🛡️ Your info stays private - we only publish scammer details</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
