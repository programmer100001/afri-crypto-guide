
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calculator, TrendingUp, Info } from "lucide-react";

export const TaxCalculator = () => {
  const [buyPrice, setBuyPrice] = useState("");
  const [sellPrice, setSellPrice] = useState("");
  const [amount, setAmount] = useState("");
  const [results, setResults] = useState({
    profit: 0,
    taxOwed: 0,
    netProfit: 0
  });

  const calculateTax = () => {
    const buy = parseFloat(buyPrice);
    const sell = parseFloat(sellPrice);
    const qty = parseFloat(amount);

    if (buy && sell && qty) {
      const totalBought = buy * qty;
      const totalSold = sell * qty;
      const profit = totalSold - totalBought;
      
      // Kenya crypto tax (simplified): 30% on profits
      const taxOwed = profit > 0 ? profit * 0.30 : 0;
      const netProfit = profit - taxOwed;

      setResults({
        profit: profit,
        taxOwed: taxOwed,
        netProfit: netProfit
      });
    }
  };

  return (
    <section className="py-20 px-4 bg-slate-800/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <Calculator className="h-10 w-10 text-orange-500" />
            Kenya Crypto Tax Calculator
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Estimate your crypto tax obligations in Kenya. Always consult a tax professional for final advice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Calculator */}
          <Card className="bg-slate-900/60 border-slate-700">
            <CardHeader>
              <CardTitle className="text-orange-500 flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Calculate Your Tax
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-slate-300 text-sm block mb-2">
                  Buy Price (KES per crypto)
                </label>
                <Input
                  value={buyPrice}
                  onChange={(e) => setBuyPrice(e.target.value)}
                  className="bg-slate-800 border-slate-600 text-white"
                  placeholder="e.g. 6000000 (for BTC)"
                  type="number"
                />
              </div>

              <div>
                <label className="text-slate-300 text-sm block mb-2">
                  Sell Price (KES per crypto)
                </label>
                <Input
                  value={sellPrice}
                  onChange={(e) => setSellPrice(e.target.value)}
                  className="bg-slate-800 border-slate-600 text-white"
                  placeholder="e.g. 6500000 (for BTC)"
                  type="number"
                />
              </div>

              <div>
                <label className="text-slate-300 text-sm block mb-2">
                  Amount of Crypto
                </label>
                <Input
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="bg-slate-800 border-slate-600 text-white"
                  placeholder="e.g. 0.5 (BTC)"
                  type="number"
                  step="0.00000001"
                />
              </div>

              <Button onClick={calculateTax} className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600">
                Calculate Tax
              </Button>
            </CardContent>
          </Card>

          {/* Results */}
          <Card className="bg-slate-900/60 border-slate-700">
            <CardHeader>
              <CardTitle className="text-green-500">Tax Calculation Results</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-slate-300">Total Profit/Loss:</span>
                  <span className={`font-bold ${results.profit >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                    KES {results.profit.toLocaleString()}
                  </span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-slate-300">Tax Owed (30%):</span>
                  <span className="text-orange-400 font-bold">
                    KES {results.taxOwed.toLocaleString()}
                  </span>
                </div>
                
                <div className="flex justify-between border-t border-slate-600 pt-3">
                  <span className="text-white font-semibold">Net Profit:</span>
                  <span className={`font-bold text-lg ${results.netProfit >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                    KES {results.netProfit.toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="bg-blue-950/30 border border-blue-500/30 rounded-lg p-4">
                <div className="flex items-start gap-2">
                  <Info className="h-4 w-4 text-blue-400 mt-0.5" />
                  <div className="text-xs text-blue-300">
                    <p className="font-semibold mb-1">Important Notes:</p>
                    <ul className="space-y-1 text-blue-200">
                      <li>• This is a simplified calculation</li>
                      <li>• Kenya taxes crypto gains at 30%</li>
                      <li>• Keep detailed records of all trades</li>
                      <li>• Consult a tax professional for complex situations</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-slate-900/60 border-slate-700">
            <CardContent className="p-6 text-center">
              <h4 className="text-orange-500 font-semibold mb-2">Record Keeping</h4>
              <p className="text-slate-300 text-sm">
                Keep detailed records of all crypto transactions, including dates, amounts, and KES values.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/60 border-slate-700">
            <CardContent className="p-6 text-center">
              <h4 className="text-orange-500 font-semibold mb-2">KRA Guidelines</h4>
              <p className="text-slate-300 text-sm">
                Follow official KRA guidance on cryptocurrency taxation and reporting requirements.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/60 border-slate-700">
            <CardContent className="p-6 text-center">
              <h4 className="text-orange-500 font-semibold mb-2">Professional Help</h4>
              <p className="text-slate-300 text-sm">
                Consider consulting a tax professional familiar with crypto taxation in Kenya.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
