
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calculator, ArrowRightLeft, Banknote, Smartphone } from "lucide-react";

export const CryptoCalculator = () => {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("KES");
  const [toCurrency, setToCurrency] = useState("BTC");
  const [result, setResult] = useState("");
  const [platform, setPlatform] = useState("binance");

  // Mock exchange rates (in real app, fetch from API)
  const rates = {
    BTC: 6500000,  // 1 BTC = 6.5M KES
    ETH: 450000,   // 1 ETH = 450K KES
    USDT: 155,     // 1 USDT = 155 KES
    SOL: 28000,    // 1 SOL = 28K KES
    BNB: 95000     // 1 BNB = 95K KES
  };

  // Platform fees (%)
  const platformFees = {
    binance: 0.1,
    yellowcard: 1.5,
    mara: 2.0,
    paxful: 3.0
  };

  const calculateConversion = () => {
    const inputAmount = parseFloat(amount);
    if (!inputAmount) return;

    let convertedAmount = 0;
    let fee = 0;

    if (fromCurrency === "KES") {
      // Converting from KES to crypto
      const cryptoRate = rates[toCurrency as keyof typeof rates];
      if (cryptoRate) {
        fee = inputAmount * (platformFees[platform as keyof typeof platformFees] / 100);
        const amountAfterFee = inputAmount - fee;
        convertedAmount = amountAfterFee / cryptoRate;
      }
    } else {
      // Converting from crypto to KES
      const cryptoRate = rates[fromCurrency as keyof typeof rates];
      if (cryptoRate) {
        const kesAmount = inputAmount * cryptoRate;
        fee = kesAmount * (platformFees[platform as keyof typeof platformFees] / 100);
        convertedAmount = kesAmount - fee;
      }
    }

    setResult(`${convertedAmount.toFixed(8)} ${toCurrency}`);
  };

  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setResult("");
  };

  const popularConversions = [
    { amount: 10000, from: "KES", to: "BTC", label: "KES 10K → BTC" },
    { amount: 50000, from: "KES", to: "ETH", label: "KES 50K → ETH" },
    { amount: 100000, from: "KES", to: "USDT", label: "KES 100K → USDT" },
    { amount: 0.001, from: "BTC", to: "KES", label: "0.001 BTC → KES" }
  ];

  const setQuickConversion = (conversion: any) => {
    setAmount(conversion.amount.toString());
    setFromCurrency(conversion.from);
    setToCurrency(conversion.to);
    setResult("");
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-950/30 to-purple-950/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <Calculator className="h-10 w-10 text-blue-500" />
            💰 Crypto Calculator & Fee Estimator
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Calculate conversions, compare platform fees, and estimate costs for buying/selling crypto in Kenya
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Main Calculator */}
          <Card className="bg-slate-900/60 border-slate-700">
            <CardHeader>
              <CardTitle className="text-blue-400 flex items-center gap-2">
                <ArrowRightLeft className="h-5 w-5" />
                Currency Converter
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Platform Selection */}
              <div>
                <label className="text-slate-300 text-sm block mb-2">Exchange Platform</label>
                <select 
                  value={platform}
                  onChange={(e) => setPlatform(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-600 text-white rounded px-3 py-2"
                >
                  <option value="binance">Binance (0.1% fee)</option>
                  <option value="yellowcard">YellowCard (1.5% fee)</option>
                  <option value="mara">Mara (2.0% fee)</option>
                  <option value="paxful">Paxful P2P (3.0% fee)</option>
                </select>
              </div>

              {/* Amount Input */}
              <div>
                <label className="text-slate-300 text-sm block mb-2">Amount</label>
                <Input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Enter amount"
                  className="bg-slate-800 border-slate-600 text-white text-lg"
                />
              </div>

              {/* Currency Selection */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-slate-300 text-sm block mb-2">From</label>
                  <select 
                    value={fromCurrency}
                    onChange={(e) => setFromCurrency(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-600 text-white rounded px-3 py-2"
                  >
                    <option value="KES">KES (Kenyan Shilling)</option>
                    <option value="BTC">BTC (Bitcoin)</option>
                    <option value="ETH">ETH (Ethereum)</option>
                    <option value="USDT">USDT (Tether)</option>
                    <option value="SOL">SOL (Solana)</option>
                    <option value="BNB">BNB (Binance Coin)</option>
                  </select>
                </div>
                
                <div className="relative">
                  <label className="text-slate-300 text-sm block mb-2">To</label>
                  <select 
                    value={toCurrency}
                    onChange={(e) => setToCurrency(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-600 text-white rounded px-3 py-2"
                  >
                    <option value="KES">KES (Kenyan Shilling)</option>
                    <option value="BTC">BTC (Bitcoin)</option>
                    <option value="ETH">ETH (Ethereum)</option>
                    <option value="USDT">USDT (Tether)</option>
                    <option value="SOL">SOL (Solana)</option>
                    <option value="BNB">BNB (Binance Coin)</option>
                  </select>
                  
                  <Button
                    onClick={swapCurrencies}
                    size="sm"
                    variant="ghost"
                    className="absolute -top-2 right-0 text-blue-400 hover:text-blue-300"
                  >
                    <ArrowRightLeft className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Calculate Button */}
              <Button onClick={calculateConversion} className="w-full bg-blue-600 hover:bg-blue-700">
                Calculate Conversion
              </Button>

              {/* Result */}
              {result && (
                <div className="bg-green-950/30 border border-green-500/30 rounded-lg p-4">
                  <div className="text-green-400 text-sm font-medium mb-1">Estimated Result:</div>
                  <div className="text-white text-xl font-bold">{result}</div>
                  <div className="text-slate-400 text-xs mt-2">
                    Platform: {platform} • Fees included
                  </div>
                </div>
              )}

              {/* Quick Conversions */}
              <div>
                <h4 className="text-slate-300 text-sm font-medium mb-3">Quick Conversions</h4>
                <div className="grid grid-cols-2 gap-2">
                  {popularConversions.map((conv, index) => (
                    <Button
                      key={index}
                      onClick={() => setQuickConversion(conv)}
                      variant="outline"
                      size="sm"
                      className="text-xs border-slate-600 text-slate-300 hover:border-blue-500 hover:text-blue-400"
                    >
                      {conv.label}
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Fee Comparison & Tips */}
          <div className="space-y-6">
            <Card className="bg-slate-900/60 border-slate-700">
              <CardHeader>
                <CardTitle className="text-orange-400 flex items-center gap-2">
                  <Banknote className="h-5 w-5" />
                  Platform Fee Comparison
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {Object.entries(platformFees).map(([platform, fee]) => (
                    <div key={platform} className="flex justify-between items-center p-3 bg-slate-800/50 rounded">
                      <div>
                        <div className="text-white font-medium capitalize">{platform}</div>
                        <div className="text-slate-400 text-sm">
                          {platform === 'binance' && 'Global exchange'}
                          {platform === 'yellowcard' && 'Popular in Kenya'}
                          {platform === 'mara' && 'African focused'}
                          {platform === 'paxful' && 'P2P trading'}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-orange-400 font-bold">{fee}%</div>
                        <div className="text-slate-400 text-xs">Trading fee</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/60 border-slate-700">
              <CardHeader>
                <CardTitle className="text-green-400 flex items-center gap-2">
                  <Smartphone className="h-5 w-5" />
                  M-Pesa Integration Tips
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm text-slate-300">
                  <div className="flex items-start gap-3">
                    <span className="text-green-400">•</span>
                    <div>
                      <strong>YellowCard:</strong> Direct M-Pesa deposits, instant processing
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-400">•</span>
                    <div>
                      <strong>Binance:</strong> Use P2P with verified M-Pesa merchants
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-400">•</span>
                    <div>
                      <strong>Mara:</strong> Local support, higher fees but more secure
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-red-400">⚠</span>
                    <div>
                      <strong>Safety:</strong> Always verify M-Pesa merchant ratings before trading
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-950/30 to-blue-950/30 border-purple-500/30">
              <CardHeader>
                <CardTitle className="text-purple-400">💡 Pro Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-slate-300">
                  <div>💰 <strong>Buy during dips:</strong> Set price alerts for better entry points</div>
                  <div>🔄 <strong>Dollar-cost averaging:</strong> Buy small amounts regularly</div>
                  <div>📱 <strong>Start small:</strong> Test with KES 1,000 before larger amounts</div>
                  <div>🛡️ <strong>Use escrow:</strong> Only trade P2P with escrow protection</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
