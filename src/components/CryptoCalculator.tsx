
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, TrendingUp } from "lucide-react";

export const CryptoCalculator = () => {
  const [btcAmount, setBtcAmount] = useState("0.001");
  const [ethAmount, setEthAmount] = useState("0.01");
  const [kesValue, setKesValue] = useState({ btc: 0, eth: 0 });

  // Mock prices - in real app, fetch from API
  const mockPrices = {
    btc: 6500000, // KES per BTC
    eth: 450000,  // KES per ETH
  };

  useEffect(() => {
    const btcKes = parseFloat(btcAmount) * mockPrices.btc;
    const ethKes = parseFloat(ethAmount) * mockPrices.eth;
    setKesValue({ btc: btcKes, eth: ethKes });
  }, [btcAmount, ethAmount]);

  return (
    <section className="py-20 px-4 bg-slate-800/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <Calculator className="h-10 w-10 text-orange-500" />
            Crypto Calculator Tools
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Calculate crypto values in Kenyan Shillings and estimate trading fees
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* BTC Calculator */}
          <Card className="bg-slate-900/60 border-slate-700">
            <CardHeader>
              <CardTitle className="text-orange-500 flex items-center gap-2">
                ₿ Bitcoin Calculator
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-slate-300 text-sm">BTC Amount</label>
                <Input
                  value={btcAmount}
                  onChange={(e) => setBtcAmount(e.target.value)}
                  className="bg-slate-800 border-slate-600 text-white"
                  placeholder="0.001"
                />
              </div>
              <div className="bg-slate-800/50 p-4 rounded-lg">
                <div className="text-slate-400 text-sm">Value in KES</div>
                <div className="text-2xl font-bold text-white">
                  KES {kesValue.btc.toLocaleString()}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* ETH Calculator */}
          <Card className="bg-slate-900/60 border-slate-700">
            <CardHeader>
              <CardTitle className="text-orange-500 flex items-center gap-2">
                Ξ Ethereum Calculator
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-slate-300 text-sm">ETH Amount</label>
                <Input
                  value={ethAmount}
                  onChange={(e) => setEthAmount(e.target.value)}
                  className="bg-slate-800 border-slate-600 text-white"
                  placeholder="0.01"
                />
              </div>
              <div className="bg-slate-800/50 p-4 rounded-lg">
                <div className="text-slate-400 text-sm">Value in KES</div>
                <div className="text-2xl font-bold text-white">
                  KES {kesValue.eth.toLocaleString()}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Fee Calculator */}
          <Card className="bg-slate-900/60 border-slate-700">
            <CardHeader>
              <CardTitle className="text-orange-500 flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Trading Fees
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-slate-300">Binance P2P</span>
                  <span className="text-white">0%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">YellowCard</span>
                  <span className="text-white">1.5%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Mara</span>
                  <span className="text-white">2.0%</span>
                </div>
              </div>
              <Button variant="outline" size="sm" className="w-full border-orange-500 text-orange-400">
                Compare All Exchanges
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
