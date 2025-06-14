
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Smartphone, Usb, AlertTriangle, CheckCircle } from "lucide-react";

const WalletsSecurity = () => {
  const wallets = [
    {
      name: "Trust Wallet",
      type: "Mobile (Hot)",
      difficulty: "Beginner",
      icon: "📱",
      pros: ["Easy to use", "Supports many coins", "Built-in DApp browser"],
      cons: ["Connected to internet", "Phone can be lost"],
      bestFor: "First-time users, small amounts"
    },
    {
      name: "MetaMask",
      type: "Browser/Mobile",
      difficulty: "Intermediate",
      icon: "🦊",
      pros: ["Popular for DeFi", "Browser extension", "Wide support"],
      cons: ["Can be complex", "Target for hackers"],
      bestFor: "DeFi users, Web3 interactions"
    },
    {
      name: "Ledger Nano S/X",
      type: "Hardware (Cold)",
      difficulty: "Advanced",
      icon: "🔒",
      pros: ["Most secure", "Offline storage", "Supports many coins"],
      cons: ["Costs $60-120", "Can be intimidating"],
      bestFor: "Large amounts, long-term storage"
    }
  ];

  const scamTypes = [
    {
      title: "Fake Apps",
      description: "Copycat wallet apps designed to steal your crypto",
      warning: "Always download from official app stores and verify developer"
    },
    {
      title: "Phishing Websites",
      description: "Fake websites that look like real exchanges or wallets",
      warning: "Always type URLs manually or use bookmarks"
    },
    {
      title: "Seed Phrase Scams",
      description: "Someone asks for your 12-word recovery phrase",
      warning: "NEVER share your seed phrase with anyone, ever"
    },
    {
      title: "Social Media Scams",
      description: "Fake celebrity accounts promoting 'giveaways'",
      warning: "Real celebrities never ask you to send crypto first"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Header />
      
      <main className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Crypto Wallets & Security Guide
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Choose the right wallet and learn essential security practices to protect your cryptocurrency investments.
            </p>
          </div>

          {/* Wallet Types Overview */}
          <Card className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/30 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Types of Crypto Wallets</CardTitle>
              <CardDescription className="text-slate-300">
                Understanding the difference between hot and cold storage
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center space-y-3">
                  <Smartphone className="h-12 w-12 text-blue-400 mx-auto" />
                  <h3 className="text-white font-semibold">Hot Wallets</h3>
                  <p className="text-slate-300 text-sm">
                    Connected to the internet. Easy to use for daily transactions but less secure.
                  </p>
                  <p className="text-blue-400 text-sm font-medium">Best for: Small amounts, daily use</p>
                </div>
                <div className="text-center space-y-3">
                  <Usb className="h-12 w-12 text-green-400 mx-auto" />
                  <h3 className="text-white font-semibold">Cold Wallets</h3>
                  <p className="text-slate-300 text-sm">
                    Offline storage. Much more secure but less convenient for frequent trading.
                  </p>
                  <p className="text-green-400 text-sm font-medium">Best for: Large amounts, long-term</p>
                </div>
                <div className="text-center space-y-3">
                  <Shield className="h-12 w-12 text-orange-400 mx-auto" />
                  <h3 className="text-white font-semibold">Best Practice</h3>
                  <p className="text-slate-300 text-sm">
                    Use both: Hot wallet for small amounts, cold wallet for savings.
                  </p>
                  <p className="text-orange-400 text-sm font-medium">Golden rule: Don't keep all eggs in one basket</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Wallet Comparison */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Popular Wallet Comparison</h2>
            <div className="grid lg:grid-cols-3 gap-6">
              {wallets.map((wallet, index) => (
                <Card key={index} className="bg-slate-800/50 border-slate-700/50">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{wallet.icon}</span>
                      <div>
                        <CardTitle className="text-xl text-white">{wallet.name}</CardTitle>
                        <CardDescription className="text-slate-300">
                          {wallet.type} • {wallet.difficulty}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="text-green-400 font-semibold mb-2">Pros:</h4>
                      <ul className="text-sm text-slate-300 space-y-1">
                        {wallet.pros.map((pro, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <CheckCircle className="h-3 w-3 text-green-400" />
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-orange-400 font-semibold mb-2">Cons:</h4>
                      <ul className="text-sm text-slate-300 space-y-1">
                        {wallet.cons.map((con, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <AlertTriangle className="h-3 w-3 text-orange-400" />
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-2 border-t border-slate-700">
                      <p className="text-xs text-slate-400">
                        <strong>Best for:</strong> {wallet.bestFor}
                      </p>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600">
                      Setup Guide
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Security Tips */}
          <Card className="bg-slate-800/50 border-orange-500/20 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Essential Security Rules</CardTitle>
              <CardDescription className="text-slate-300">
                Follow these rules to keep your crypto safe
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="text-green-400 font-semibold">✅ Always Do:</h4>
                  <ul className="space-y-3 text-slate-300 text-sm">
                    <li className="flex gap-3">
                      <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                      Write down your seed phrase on paper and store it safely
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                      Use strong, unique passwords for all crypto accounts
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                      Enable 2FA (two-factor authentication) everywhere
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                      Double-check wallet addresses before sending
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                      Keep software and apps updated
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-red-400 font-semibold">❌ Never Do:</h4>
                  <ul className="space-y-3 text-slate-300 text-sm">
                    <li className="flex gap-3">
                      <AlertTriangle className="h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" />
                      Share your seed phrase or private keys with anyone
                    </li>
                    <li className="flex gap-3">
                      <AlertTriangle className="h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" />
                      Store seed phrases in photos or cloud storage
                    </li>
                    <li className="flex gap-3">
                      <AlertTriangle className="h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" />
                      Click links in crypto-related emails
                    </li>
                    <li className="flex gap-3">
                      <AlertTriangle className="h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" />
                      Use public WiFi for crypto transactions
                    </li>
                    <li className="flex gap-3">
                      <AlertTriangle className="h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" />
                      Keep all your crypto on exchanges
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Common Scams */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Common Crypto Scams in Kenya</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {scamTypes.map((scam, index) => (
                <Card key={index} className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border-red-500/30">
                  <CardHeader>
                    <CardTitle className="text-lg text-white flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-red-400" />
                      {scam.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-slate-300 text-sm">{scam.description}</p>
                    <div className="bg-red-900/20 p-3 rounded border border-red-500/20">
                      <p className="text-red-300 text-sm font-medium">
                        🚨 How to avoid: {scam.warning}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Quick Setup Guide */}
          <Card className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border-green-500/30">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Quick Start: Set Up Trust Wallet in 5 Minutes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="text-green-400 font-semibold">Setup Steps:</h4>
                  <ol className="list-decimal list-inside space-y-2 text-slate-300 text-sm">
                    <li>Download Trust Wallet from Google Play or App Store</li>
                    <li>Tap "Create a new wallet"</li>
                    <li>Write down your 12-word recovery phrase</li>
                    <li>Confirm the recovery phrase</li>
                    <li>Set up PIN or biometric security</li>
                    <li>Your wallet is ready to receive crypto!</li>
                  </ol>
                </div>
                <div className="space-y-4">
                  <h4 className="text-orange-400 font-semibold">Important Tips:</h4>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li>• Write recovery phrase on paper, not phone</li>
                    <li>• Store it in a safe place</li>
                    <li>• Never share it with anyone</li>
                    <li>• Test with small amount first</li>
                    <li>• Backup your wallet immediately</li>
                  </ul>
                  <Button className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600">
                    Watch Video Tutorial
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default WalletsSecurity;
