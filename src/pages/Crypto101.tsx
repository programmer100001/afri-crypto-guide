
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Crypto101 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Header />
      
      <main className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Crypto 101: Your Complete Beginner's Guide
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Learn cryptocurrency from scratch with simple explanations and local examples tailored for Kenyan investors.
            </p>
          </div>

          <div className="space-y-8">
            <Card className="bg-slate-800/50 border-orange-500/20">
              <CardHeader>
                <CardTitle className="text-2xl text-white">What is Cryptocurrency?</CardTitle>
                <CardDescription className="text-slate-300">
                  Think of crypto like digital money that works without banks
                </CardDescription>
              </CardHeader>
              <CardContent className="text-slate-300 space-y-4">
                <p>
                  Imagine if M-Pesa worked without Safaricom controlling it. Instead, thousands of computers 
                  around the world keep track of who owns what money. That's essentially how cryptocurrency works!
                </p>
                <p>
                  <strong className="text-orange-400">Simple analogy:</strong> If traditional banking is like 
                  having a bank manager keep your money records, cryptocurrency is like having a public ledger 
                  that everyone can see but no one can cheat on.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-orange-500/20">
              <CardHeader>
                <CardTitle className="text-2xl text-white">What is Blockchain?</CardTitle>
                <CardDescription className="text-slate-300">
                  The technology that makes crypto possible
                </CardDescription>
              </CardHeader>
              <CardContent className="text-slate-300 space-y-4">
                <p>
                  Think of blockchain like a public land registry that everyone can see. Once a land title 
                  is recorded, it can't be changed or deleted. Each "block" contains transaction records, 
                  and they're linked together in a "chain."
                </p>
                <div className="bg-slate-900/50 p-4 rounded-lg">
                  <h4 className="text-orange-400 font-semibold mb-2">How a Transaction Works:</h4>
                  <ol className="list-decimal list-inside space-y-2 text-sm">
                    <li>John wants to send 0.01 Bitcoin to Mary</li>
                    <li>He announces this to the network</li>
                    <li>Computers verify John has the Bitcoin to send</li>
                    <li>The transaction is recorded in a new block</li>
                    <li>Mary receives the Bitcoin</li>
                  </ol>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-orange-500/20">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Why Crypto Matters in Kenya</CardTitle>
                <CardDescription className="text-slate-300">
                  Real benefits for Kenyan users
                </CardDescription>
              </CardHeader>
              <CardContent className="text-slate-300 space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <h4 className="text-orange-400 font-semibold">Protection from Inflation</h4>
                    <p className="text-sm">
                      When the Kenyan Shilling weakens, Bitcoin often holds or increases its value
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-orange-400 font-semibold">Cheaper Remittances</h4>
                    <p className="text-sm">
                      Diaspora can send money home with lower fees than traditional banks
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-orange-400 font-semibold">24/7 Trading</h4>
                    <p className="text-sm">
                      Unlike NSE, crypto markets never close - trade anytime
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-orange-400 font-semibold">Financial Inclusion</h4>
                    <p className="text-sm">
                      Access global markets with just a smartphone and internet
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-orange-500/10 to-yellow-500/10 border-orange-500/30">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Ready for Next Steps?</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600">
                  Learn About Bitcoin & Ethereum
                </Button>
                <Button variant="outline" className="border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white">
                  How to Buy Crypto in Kenya
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Crypto101;
