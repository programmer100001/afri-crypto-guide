
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, AlertTriangle, Smartphone } from "lucide-react";

const BuyCryptoKenya = () => {
  const exchanges = [
    {
      name: "Binance",
      mpesaSupport: true,
      minAmount: "KES 100",
      fees: "0.1% trading + P2P fees vary",
      pros: ["Largest exchange", "Many payment options", "Low trading fees"],
      cons: ["P2P can be risky", "Complex for beginners"]
    },
    {
      name: "YellowCard",
      mpesaSupport: true,
      minAmount: "KES 500",
      fees: "~3-5% spread",
      pros: ["Kenya-focused", "Easy to use", "Customer support"],
      cons: ["Higher fees", "Limited coins"]
    },
    {
      name: "Mara",
      mpesaSupport: true,
      minAmount: "KES 1000",
      fees: "~2-4% spread",
      pros: ["African-focused", "Regulated", "Mobile app"],
      cons: ["Limited availability", "Higher minimum"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Header />
      
      <main className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              How to Buy Crypto in Kenya with M-Pesa
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Complete step-by-step guide to purchasing Bitcoin and other cryptocurrencies safely using M-Pesa and local payment methods.
            </p>
          </div>

          {/* Quick Start Guide */}
          <Card className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border-green-500/30 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center gap-2">
                <Smartphone className="h-6 w-6 text-green-400" />
                Quick Start: Buy Bitcoin in 10 Minutes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="text-green-400 font-semibold">What You Need:</h4>
                  <ul className="space-y-2 text-slate-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      M-Pesa account with funds
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      Valid ID (for account verification)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      Smartphone or computer
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      Email address
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-orange-400 font-semibold">Quick Steps:</h4>
                  <ol className="list-decimal list-inside space-y-2 text-slate-300 text-sm">
                    <li>Choose an exchange (see comparison below)</li>
                    <li>Create account & verify your identity</li>
                    <li>Find M-Pesa payment option</li>
                    <li>Enter amount & follow payment instructions</li>
                    <li>Transfer crypto to secure wallet</li>
                  </ol>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Exchange Comparison */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Best Crypto Exchanges for Kenyans</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {exchanges.map((exchange, index) => (
                <Card key={index} className="bg-slate-800/50 border-slate-700/50">
                  <CardHeader>
                    <CardTitle className="text-xl text-white">{exchange.name}</CardTitle>
                    <CardDescription className="text-slate-300">
                      Min: {exchange.minAmount} | Fees: {exchange.fees}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="text-green-400 font-semibold mb-2">Pros:</h4>
                      <ul className="text-sm text-slate-300 space-y-1">
                        {exchange.pros.map((pro, i) => (
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
                        {exchange.cons.map((con, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <AlertTriangle className="h-3 w-3 text-orange-400" />
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600">
                      Read Full Review
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Step by Step Guide */}
          <Card className="bg-slate-800/50 border-orange-500/20 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Step-by-Step: Buying on Binance with M-Pesa</CardTitle>
              <CardDescription className="text-slate-300">
                Detailed walkthrough with screenshots (most popular method)
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">1</div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Create Binance Account</h4>
                    <p className="text-slate-300 text-sm">Visit binance.com, click "Register", enter email and strong password. Verify email.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">2</div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Complete Identity Verification</h4>
                    <p className="text-slate-300 text-sm">Upload ID photo, take selfie, verify phone number. This may take 1-24 hours.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">3</div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Go to P2P Trading</h4>
                    <p className="text-slate-300 text-sm">Click "Buy Crypto" → "P2P Trading" → Select "BTC" and "KES"</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">4</div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Choose Seller</h4>
                    <p className="text-slate-300 text-sm">Look for sellers with 95%+ completion rate, many trades, accepts M-Pesa payment.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">5</div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Complete Payment</h4>
                    <p className="text-slate-300 text-sm">Enter amount, click "Buy", follow M-Pesa payment instructions exactly. Click "Paid" when done.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">6</div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Receive Bitcoin</h4>
                    <p className="text-slate-300 text-sm">Seller releases Bitcoin to your Binance wallet. Transfer to personal wallet for security.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Safety Checklist */}
          <Card className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border-red-500/30">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-red-400" />
                Safety Checklist: What to Check Before You Send Money
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="text-red-400 font-semibold">Red Flags - Never Send Money If:</h4>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li>• Seller completion rate below 95%</li>
                    <li>• Very few completed trades (under 10)</li>
                    <li>• Asks you to send to different M-Pesa number</li>
                    <li>• Price seems too good to be true</li>
                    <li>• Rushes you or creates pressure</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="text-green-400 font-semibold">Good Signs - Proceed If:</h4>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li>• 98%+ completion rate</li>
                    <li>• Hundreds of successful trades</li>
                    <li>• Responds quickly and professionally</li>
                    <li>• Clear payment instructions</li>
                    <li>• Fair market price</li>
                  </ul>
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

export default BuyCryptoKenya;
