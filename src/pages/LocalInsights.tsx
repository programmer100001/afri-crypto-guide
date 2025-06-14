
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Smartphone, Send, Newspaper } from "lucide-react";

const LocalInsights = () => {
  const insights = [
    {
      icon: <FileText className="h-8 w-8 text-orange-400" />,
      title: "Kenya Tax & Regulations",
      description: "KRA guidance, legal status, and compliance requirements",
      highlights: ["Capital gains tax on crypto", "KRA registration requirements", "Legal tender status"],
      link: "/kenya-tax-regulations"
    },
    {
      icon: <Smartphone className="h-8 w-8 text-green-400" />,
      title: "Crypto & M-Pesa Integration",
      description: "How cryptocurrency works with Kenya's mobile money system",
      highlights: ["M-Pesa to crypto gateways", "Transaction limits", "Safety considerations"],
      link: "/crypto-mpesa"
    },
    {
      icon: <Send className="h-8 w-8 text-blue-400" />,
      title: "Crypto Remittances",
      description: "How diaspora can send money home using cryptocurrency",
      highlights: ["Cost comparison vs banks", "Step-by-step guides", "Best practices"],
      link: "/crypto-remittances"
    },
    {
      icon: <Newspaper className="h-8 w-8 text-purple-400" />,
      title: "Kenya Crypto News",
      description: "Latest news and developments in Kenya's crypto space",
      highlights: ["Policy updates", "Local startup news", "Market trends"],
      link: "/kenya-crypto-news"
    }
  ];

  const recentNews = [
    {
      title: "KRA Issues New Crypto Tax Guidelines for 2024",
      summary: "Kenya Revenue Authority clarifies taxation on cryptocurrency gains and trading activities.",
      date: "2 days ago",
      category: "Regulation"
    },
    {
      title: "M-Pesa Partners with Local Crypto Exchange",
      summary: "New partnership enables direct crypto purchases through M-Pesa platform.",
      date: "1 week ago",
      category: "Partnerships"
    },
    {
      title: "Kenyan Youth Lead Africa in Crypto Adoption",
      summary: "New study shows 18-35 age group driving cryptocurrency usage across the continent.",
      date: "2 weeks ago",
      category: "Research"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Header />
      
      <main className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Kenya Crypto Insights
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Deep insights into cryptocurrency adoption, regulation, and opportunities specifically for the Kenyan market.
            </p>
          </div>

          {/* Main Insights Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {insights.map((insight, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700/50 hover:border-orange-500/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    {insight.icon}
                    <div>
                      <CardTitle className="text-xl text-white">{insight.title}</CardTitle>
                      <CardDescription className="text-slate-300">
                        {insight.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="text-orange-400 font-semibold mb-2">Key Topics:</h4>
                    <ul className="space-y-1">
                      {insight.highlights.map((highlight, i) => (
                        <li key={i} className="text-slate-300 text-sm flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-orange-400 rounded-full"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600">
                    Explore {insight.title}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Featured Article */}
          <Card className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border-green-500/30 mb-12">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Featured: Crypto Tax Guide for Kenyans 2024</CardTitle>
              <CardDescription className="text-slate-300">
                Complete guide to understanding and complying with KRA cryptocurrency tax requirements
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="text-green-400 font-semibold">What You'll Learn:</h4>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li>• When crypto gains are taxable in Kenya</li>
                    <li>• How to calculate capital gains tax</li>
                    <li>• Required documentation for KRA</li>
                    <li>• Common mistakes to avoid</li>
                    <li>• Sample tax calculation examples</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-blue-400 font-semibold">Quick Facts:</h4>
                  <div className="space-y-3 text-sm">
                    <div className="bg-slate-900/50 p-3 rounded">
                      <span className="text-slate-400">Capital Gains Tax: </span>
                      <span className="text-white">5% on gains above KES 3M annually</span>
                    </div>
                    <div className="bg-slate-900/50 p-3 rounded">
                      <span className="text-slate-400">Legal Status: </span>
                      <span className="text-white">Not legal tender, but trading allowed</span>
                    </div>
                    <div className="bg-slate-900/50 p-3 rounded">
                      <span className="text-slate-400">Reporting: </span>
                      <span className="text-white">Required for gains above threshold</span>
                    </div>
                  </div>
                </div>
              </div>
              <Button size="lg" className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600">
                Read Complete Tax Guide
              </Button>
            </CardContent>
          </Card>

          {/* Recent News */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Latest Kenya Crypto News</h2>
            <div className="grid gap-6">
              {recentNews.map((news, index) => (
                <Card key={index} className="bg-slate-800/50 border-slate-700/50">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-xs bg-orange-500/20 text-orange-400 px-2 py-1 rounded">
                        {news.category}
                      </span>
                      <span className="text-slate-400 text-sm">{news.date}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{news.title}</h3>
                    <p className="text-slate-300 text-sm mb-4">{news.summary}</p>
                    <Button variant="ghost" size="sm" className="text-orange-400 hover:text-orange-300 p-0">
                      Read More →
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Market Analysis */}
          <Card className="bg-slate-800/50 border-orange-500/20 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Kenya Crypto Market Analysis</CardTitle>
              <CardDescription className="text-slate-300">
                Understanding the local cryptocurrency landscape
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center space-y-3">
                  <div className="text-3xl font-bold text-orange-500">23%</div>
                  <div className="text-slate-300 text-sm">Of Kenyan youth own crypto</div>
                </div>
                <div className="text-center space-y-3">
                  <div className="text-3xl font-bold text-green-500">$2.4B</div>
                  <div className="text-slate-300 text-sm">Crypto received in 2023</div>
                </div>
                <div className="text-center space-y-3">
                  <div className="text-3xl font-bold text-blue-500">15+</div>
                  <div className="text-slate-300 text-sm">Active exchanges in Kenya</div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-slate-900/50 rounded-lg">
                <h4 className="text-orange-400 font-semibold mb-2">Key Trends:</h4>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>• Mobile-first adoption driven by M-Pesa familiarity</li>
                  <li>• Remittances from diaspora driving usage</li>
                  <li>• Growing interest in Bitcoin as inflation hedge</li>
                  <li>• Youth leading adoption across urban centers</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Newsletter Signup */}
          <Card className="bg-gradient-to-r from-orange-500/10 to-yellow-500/10 border-orange-500/30">
            <CardHeader>
              <CardTitle className="text-2xl text-white text-center">Stay Updated on Kenya Crypto News</CardTitle>
              <CardDescription className="text-slate-300 text-center">
                Get weekly insights on regulation, market trends, and opportunities in Kenya's crypto space
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-slate-800 border border-slate-600 rounded text-white placeholder:text-slate-400"
                />
                <Button className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600">
                  Subscribe
                </Button>
              </div>
              <p className="text-sm text-slate-400 mt-3">
                Join 5,000+ subscribers • No spam • Unsubscribe anytime
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LocalInsights;
