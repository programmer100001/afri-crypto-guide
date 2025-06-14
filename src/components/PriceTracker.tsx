
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TrendingUp, TrendingDown, Bell, BellOff } from "lucide-react";

interface CryptoPrice {
  symbol: string;
  name: string;
  price: number;
  change24h: number;
  changePercentage: number;
  alerts?: boolean;
}

export const PriceTracker = () => {
  const [prices, setPrices] = useState<CryptoPrice[]>([]);
  const [alertPrice, setAlertPrice] = useState("");
  const [selectedCrypto, setSelectedCrypto] = useState("");

  // Mock price data with more realistic updates
  useEffect(() => {
    const mockPrices: CryptoPrice[] = [
      {
        symbol: "BTC",
        name: "Bitcoin",
        price: 6500000,
        change24h: 150000,
        changePercentage: 2.36,
        alerts: false
      },
      {
        symbol: "ETH",
        name: "Ethereum", 
        price: 450000,
        change24h: -12000,
        changePercentage: -2.59,
        alerts: false
      },
      {
        symbol: "USDT",
        name: "Tether",
        price: 155,
        change24h: 0.5,
        changePercentage: 0.32,
        alerts: false
      },
      {
        symbol: "BNB",
        name: "BNB",
        price: 95000,
        change24h: 2800,
        changePercentage: 3.04,
        alerts: false
      },
      {
        symbol: "SOL",
        name: "Solana",
        price: 28000,
        change24h: 1200,
        changePercentage: 4.48,
        alerts: false
      },
      {
        symbol: "ADA",
        name: "Cardano",
        price: 125,
        change24h: -5,
        changePercentage: -3.85,
        alerts: false
      }
    ];
    
    setPrices(mockPrices);
    
    // Update prices every 30 seconds with realistic market movements
    const interval = setInterval(() => {
      setPrices(prevPrices => 
        prevPrices.map(price => {
          const randomChange = (Math.random() - 0.5) * 0.02; // ±1% change
          const newPrice = price.price * (1 + randomChange);
          const priceChange = newPrice - price.price;
          const percentChange = (priceChange / price.price) * 100;
          
          return {
            ...price,
            price: newPrice,
            change24h: priceChange,
            changePercentage: price.changePercentage + percentChange * 0.1
          };
        })
      );
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const toggleAlert = (symbol: string) => {
    setPrices(prevPrices => 
      prevPrices.map(price => 
        price.symbol === symbol 
          ? { ...price, alerts: !price.alerts }
          : price
      )
    );
  };

  const setAlert = () => {
    if (selectedCrypto && alertPrice) {
      console.log(`Alert set for ${selectedCrypto} at KES ${alertPrice}`);
      // In real app, save to backend
      alert(`Price alert set for ${selectedCrypto} at KES ${alertPrice}`);
      setAlertPrice("");
      setSelectedCrypto("");
    }
  };

  return (
    <section className="py-20 px-4 bg-slate-800/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            🔥 Live Crypto Prices (KES)
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Real-time cryptocurrency prices in Kenyan Shillings with price alerts
          </p>
          <div className="mt-6 text-sm text-green-400 flex items-center justify-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            Live • Updates every 30 seconds
          </div>
        </div>

        {/* Price Alert Setup */}
        <div className="max-w-md mx-auto mb-12">
          <Card className="bg-gradient-to-r from-orange-500/10 to-yellow-500/10 border-orange-500/30">
            <CardHeader>
              <CardTitle className="text-orange-500 text-center">🔔 Set Price Alert</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-3">
                <select 
                  value={selectedCrypto}
                  onChange={(e) => setSelectedCrypto(e.target.value)}
                  className="bg-slate-800 border border-slate-600 text-white rounded px-3 py-2"
                >
                  <option value="">Select Crypto</option>
                  {prices.map(crypto => (
                    <option key={crypto.symbol} value={crypto.symbol}>
                      {crypto.name} ({crypto.symbol})
                    </option>
                  ))}
                </select>
                <Input
                  type="number"
                  placeholder="Alert price in KES"
                  value={alertPrice}
                  onChange={(e) => setAlertPrice(e.target.value)}
                  className="bg-slate-800 border-slate-600 text-white"
                />
                <Button onClick={setAlert} className="bg-orange-500 hover:bg-orange-600">
                  Set Alert
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {prices.map((crypto) => (
            <Card key={crypto.symbol} className="bg-slate-900/60 border-slate-700 hover:bg-slate-900/80 transition-all duration-300 hover:scale-105">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center justify-between">
                  <div>
                    <div className="text-orange-500 font-bold text-lg">{crypto.symbol}</div>
                    <div className="text-slate-400 text-sm">{crypto.name}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => toggleAlert(crypto.symbol)}
                      className={`p-1 rounded ${crypto.alerts ? 'text-orange-500' : 'text-slate-500 hover:text-orange-400'}`}
                    >
                      {crypto.alerts ? <Bell className="h-4 w-4" /> : <BellOff className="h-4 w-4" />}
                    </button>
                    <div className={`flex items-center gap-1 ${
                      crypto.changePercentage >= 0 ? 'text-green-500' : 'text-red-500'
                    }`}>
                      {crypto.changePercentage >= 0 ? (
                        <TrendingUp className="h-4 w-4" />
                      ) : (
                        <TrendingDown className="h-4 w-4" />
                      )}
                    </div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-white">
                    KES {crypto.price.toLocaleString('en-KE', { maximumFractionDigits: 0 })}
                  </div>
                  <div className={`text-sm flex items-center gap-1 ${
                    crypto.changePercentage >= 0 ? 'text-green-500' : 'text-red-500'
                  }`}>
                    <span>{crypto.changePercentage >= 0 ? '+' : ''}{crypto.changePercentage.toFixed(2)}%</span>
                    <span className="text-slate-400">24h</span>
                  </div>
                  <div className="text-xs text-slate-400">
                    KES {crypto.change24h >= 0 ? '+' : ''}{crypto.change24h.toLocaleString('en-KE', { maximumFractionDigits: 0 })} today
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-slate-400 text-sm mb-4">
            Prices from major exchanges • Data refreshes automatically
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-xs text-slate-500">
            <span>📊 Binance</span>
            <span>🟡 YellowCard</span> 
            <span>🔷 Mara</span>
            <span>💱 Paxful</span>
          </div>
        </div>
      </div>
    </section>
  );
};
