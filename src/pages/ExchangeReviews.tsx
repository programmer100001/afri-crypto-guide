
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, CheckCircle, AlertTriangle, Smartphone, CreditCard } from "lucide-react";

const ExchangeReviews = () => {
  const exchanges = [
    {
      name: "Binance",
      rating: 4.2,
      logo: "🔶",
      summary: "World's largest exchange with P2P trading",
      mpesaSupport: true,
      kycRequired: true,
      minTrade: "KES 100",
      tradingFees: "0.1%",
      withdrawalFees: "Variable",
      supportedCoins: "600+",
      pros: [
        "Largest selection of cryptocurrencies",
        "Low trading fees",
        "Advanced trading features",
        "High liquidity",
        "P2P trading with M-Pesa"
      ],
      cons: [
        "Can be overwhelming for beginners",
        "P2P trading requires caution",
        "Customer support can be slow",
        "Regulatory concerns in some countries"
      ],
      verdict: "Best for experienced traders and those wanting variety",
      affiliate: true
    },
    {
      name: "YellowCard",
      rating: 4.0,
      logo: "💛",
      summary: "Africa-focused exchange with local support",
      mpesaSupport: true,
      kycRequired: true,
      minTrade: "KES 500",
      tradingFees: "~3-5% spread",
      withdrawalFees: "2-3%",
      supportedCoins: "15+",
      pros: [
        "Designed specifically for Africa",
        "Local customer support",
        "Simple interface",
        "Fast M-Pesa integration",
        "Educational resources"
      ],
      cons: [
        "Higher fees than global exchanges",
        "Limited cryptocurrency selection",
        "Spreads can be high during volatility",
        "Smaller user base"
      ],
      verdict: "Best for beginners who want simplicity and local support",
      affiliate: true
    },
    {
      name: "Mara",
      rating: 3.8,
      logo: "🟢",
      summary: "Pan-African crypto platform",
      mpesaSupport: true,
      kycRequired: true,
      minTrade: "KES 1,000",
      tradingFees: "~2-4% spread",
      withdrawalFees: "2-4%",
      supportedCoins: "10+",
      pros: [
        "African-owned and operated",
        "Regulatory compliant",
        "Good mobile app",
        "Local market focus",
        "Educational initiatives"
      ],
      cons: [
        "Limited availability",
        "Fewer features than competitors",
        "Higher minimum trades",
        "Limited coin selection"
      ],
      verdict: "Good for supporting African crypto ecosystem",
      affiliate: false
    },
    {
      name: "Paxful",
      rating: 3.5,
      logo: "🔵",
      summary: "P2P marketplace with many payment options",
      mpesaSupport: true,
      kycRequired: false,
      minTrade: "KES 200",
      tradingFees: "1% buyer, 0% seller",
      withdrawalFees: "Bitcoin network fees",
      supportedCoins: "5+",
      pros: [
        "No KYC for small amounts",
        "Many payment methods",
        "P2P trading",
        "Escrow protection",
        "Gift card trading"
      ],
      cons: [
        "Higher scam risk",
        "Limited to mainly Bitcoin",
        "Seller verification varies",
        "Can be complex for beginners"
      ],
      verdict: "Use with extreme caution, experienced users only",
      affiliate: false
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.floor(rating) 
            ? "text-yellow-400 fill-current" 
            : i < rating 
            ? "text-yellow-400 fill-current opacity-50" 
            : "text-gray-400"
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Header />
      
      <main className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Crypto Exchange Reviews for Kenyans
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Honest, detailed reviews of crypto exchanges that work in Kenya. Compare fees, features, and safety ratings.
            </p>
          </div>

          {/* Quick Comparison Table */}
          <Card className="bg-slate-800/50 border-orange-500/20 mb-12">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Quick Comparison</CardTitle>
              <CardDescription className="text-slate-300">
                At-a-glance comparison of key features
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-2 text-white">Exchange</th>
                      <th className="text-left py-3 px-2 text-white">Rating</th>
                      <th className="text-left py-3 px-2 text-white">M-Pesa</th>
                      <th className="text-left py-3 px-2 text-white">Min Trade</th>
                      <th className="text-left py-3 px-2 text-white">Fees</th>
                      <th className="text-left py-3 px-2 text-white">Best For</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-300">
                    {exchanges.map((exchange, index) => (
                      <tr key={index} className="border-b border-slate-800">
                        <td className="py-3 px-2 font-medium">{exchange.name}</td>
                        <td className="py-3 px-2">{exchange.rating}/5</td>
                        <td className="py-3 px-2">
                          {exchange.mpesaSupport ? (
                            <CheckCircle className="h-4 w-4 text-green-400" />
                          ) : (
                            <AlertTriangle className="h-4 w-4 text-red-400" />
                          )}
                        </td>
                        <td className="py-3 px-2">{exchange.minTrade}</td>
                        <td className="py-3 px-2">{exchange.tradingFees}</td>
                        <td className="py-3 px-2 text-xs">{exchange.verdict.split(' ').slice(2, 5).join(' ')}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Detailed Reviews */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Detailed Reviews</h2>
            
            {exchanges.map((exchange, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700/50">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <span className="text-4xl">{exchange.logo}</span>
                      <div>
                        <CardTitle className="text-2xl text-white flex items-center gap-3">
                          {exchange.name}
                          {exchange.affiliate && (
                            <span className="text-xs bg-orange-500 text-white px-2 py-1 rounded">
                              Partner
                            </span>
                          )}
                        </CardTitle>
                        <CardDescription className="text-slate-300 text-lg mb-2">
                          {exchange.summary}
                        </CardDescription>
                        <div className="flex items-center gap-2">
                          {renderStars(exchange.rating)}
                          <span className="text-slate-400 text-sm">({exchange.rating}/5)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Key Features */}
                  <div className="grid md:grid-cols-3 gap-4 p-4 bg-slate-900/50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Smartphone className="h-4 w-4 text-blue-400" />
                      <span className="text-slate-300 text-sm">
                        M-Pesa: {exchange.mpesaSupport ? "✅" : "❌"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CreditCard className="h-4 w-4 text-green-400" />
                      <span className="text-slate-300 text-sm">
                        Min: {exchange.minTrade}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-orange-400 text-sm">
                        Coins: {exchange.supportedCoins}
                      </span>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Pros */}
                    <div>
                      <h4 className="text-green-400 font-semibold mb-3 flex items-center gap-2">
                        <CheckCircle className="h-4 w-4" />
                        Pros
                      </h4>
                      <ul className="space-y-2">
                        {exchange.pros.map((pro, i) => (
                          <li key={i} className="text-slate-300 text-sm flex items-start gap-2">
                            <span className="text-green-400 mt-1">•</span>
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Cons */}
                    <div>
                      <h4 className="text-red-400 font-semibold mb-3 flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4" />
                        Cons
                      </h4>
                      <ul className="space-y-2">
                        {exchange.cons.map((con, i) => (
                          <li key={i} className="text-slate-300 text-sm flex items-start gap-2">
                            <span className="text-red-400 mt-1">•</span>
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Fees Breakdown */}
                  <div className="p-4 bg-slate-900/30 rounded-lg">
                    <h4 className="text-orange-400 font-semibold mb-2">Fee Structure</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-slate-400">Trading: </span>
                        <span className="text-white">{exchange.tradingFees}</span>
                      </div>
                      <div>
                        <span className="text-slate-400">Withdrawal: </span>
                        <span className="text-white">{exchange.withdrawalFees}</span>
                      </div>
                      <div>
                        <span className="text-slate-400">KYC: </span>
                        <span className="text-white">{exchange.kycRequired ? "Required" : "Optional"}</span>
                      </div>
                    </div>
                  </div>

                  {/* Verdict */}
                  <div className="p-4 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-lg border border-orange-500/20">
                    <h4 className="text-orange-400 font-semibold mb-2">Our Verdict</h4>
                    <p className="text-slate-300 text-sm">{exchange.verdict}</p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <Button className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600">
                      {exchange.affiliate ? "Get Started (Our Partner)" : "Visit Website"}
                    </Button>
                    <Button variant="outline" className="border-slate-600 text-slate-300">
                      Read Full Guide
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Safety Tips */}
          <Card className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border-red-500/30 mt-12">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-red-400" />
                Exchange Safety Tips
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="text-red-400 font-semibold">Before You Sign Up:</h4>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li>• Check if the exchange is regulated in your jurisdiction</li>
                    <li>• Read recent user reviews and complaints</li>
                    <li>• Verify the official website URL</li>
                    <li>• Start with small amounts to test</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="text-green-400 font-semibold">After You Sign Up:</h4>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li>• Enable 2FA immediately</li>
                    <li>• Don't keep large amounts on exchanges</li>
                    <li>• Use strong, unique passwords</li>
                    <li>• Regularly check your transaction history</li>
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

export default ExchangeReviews;
