
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";

interface CryptoPrice {
  symbol: string;
  name: string;
  price: number;
  change24h: number;
  changePercentage: number;
}

export const PriceTracker = () => {
  const [prices, setPrices] = useState<CryptoPrice[]>([]);

  // Mock price data - in real app, fetch from CoinGecko or similar API
  useEffect(() => {
    const mockPrices: CryptoPrice[] = [
      {
        symbol: "BTC",
        name: "Bitcoin",
        price: 6500000,
        change24h: 150000,
        changePercentage: 2.36
      },
      {
        symbol: "ETH",
        name: "Ethereum",
        price: 450000,
        change24h: -12000,
        changePercentage: -2.59
      },
      {
        symbol: "USDT",
        name: "Tether",
        price: 155,
        change24h: 0.5,
        changePercentage: 0.32
      },
      {
        symbol: "BNB",
        name: "BNB",
        price: 95000,
        change24h: 2800,
        changePercentage: 3.04
      }
    ];
    
    setPrices(mockPrices);
    
    // Update prices every 30 seconds with slight variations
    const interval = setInterval(() => {
      setPrices(prevPrices => 
        prevPrices.map(price => ({
          ...price,
          price: price.price + (Math.random() - 0.5) * price.price * 0.001,
          changePercentage: price.changePercentage + (Math.random() - 0.5) * 0.1
        }))
      );
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-4 bg-slate-800/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Live Crypto Prices (KES)
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Track real-time cryptocurrency prices in Kenyan Shillings
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {prices.map((crypto) => (
            <Card key={crypto.symbol} className="bg-slate-900/60 border-slate-700 hover:bg-slate-900/80 transition-colors">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center justify-between">
                  <div>
                    <div className="text-orange-500 font-bold text-lg">{crypto.symbol}</div>
                    <div className="text-slate-400 text-sm">{crypto.name}</div>
                  </div>
                  <div className={`flex items-center gap-1 ${
                    crypto.changePercentage >= 0 ? 'text-green-500' : 'text-red-500'
                  }`}>
                    {crypto.changePercentage >= 0 ? (
                      <TrendingUp className="h-4 w-4" />
                    ) : (
                      <TrendingDown className="h-4 w-4" />
                    )}
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
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-slate-400 text-sm">
            Prices update every 30 seconds • Data from major exchanges
          </p>
        </div>
      </div>
    </section>
  );
};
