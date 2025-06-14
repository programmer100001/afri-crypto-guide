
import { Button } from "@/components/ui/button";

export const PopularArticles = () => {
  const articles = [
    {
      title: "How to Buy Bitcoin with M-Pesa in 2024",
      description: "Step-by-step guide to purchasing Bitcoin using M-Pesa through trusted exchanges.",
      readTime: "5 min read",
      category: "Getting Started",
      featured: true
    },
    {
      title: "Crypto Tax Guide for Kenyans",
      description: "Understanding KRA requirements and how to report crypto gains properly.",
      readTime: "8 min read",
      category: "Legal & Tax",
      featured: true
    },
    {
      title: "Best Crypto Wallets for Beginners",
      description: "Compare the safest wallets for storing Bitcoin and Ethereum in Kenya.",
      readTime: "6 min read",
      category: "Security",
      featured: true
    },
    {
      title: "Avoiding Crypto Scams in Kenya",
      description: "Red flags to watch for and how to protect yourself from common crypto scams.",
      readTime: "4 min read",
      category: "Security",
      featured: false
    },
    {
      title: "Understanding Blockchain Technology",
      description: "Simple explanation of how blockchain works using everyday examples.",
      readTime: "7 min read",
      category: "Education",
      featured: false
    },
    {
      title: "Crypto vs Traditional Banking",
      description: "Why young Kenyans are choosing crypto over traditional banking options.",
      readTime: "5 min read",
      category: "Analysis",
      featured: false
    }
  ];

  return (
    <section id="articles" className="py-20 px-4 bg-slate-800/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Popular Learning Resources</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Start with our most popular guides and tutorials, crafted specifically for the Kenyan market.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div key={index} className={`bg-slate-900/60 rounded-xl p-6 border transition-all duration-300 hover:scale-105 cursor-pointer ${
              article.featured 
                ? "border-orange-500/50 bg-gradient-to-br from-slate-900/80 to-slate-800/60" 
                : "border-slate-700/50 hover:border-slate-600/50"
            }`}>
              {article.featured && (
                <div className="inline-block bg-gradient-to-r from-orange-500 to-yellow-500 text-white text-xs px-3 py-1 rounded-full mb-3 font-semibold">
                  Featured
                </div>
              )}
              <div className="text-sm text-orange-400 mb-2">{article.category}</div>
              <h3 className="text-xl font-semibold text-white mb-3 leading-tight">{article.title}</h3>
              <p className="text-slate-300 mb-4 line-clamp-3">{article.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-400">{article.readTime}</span>
                <Button variant="ghost" size="sm" className="text-orange-400 hover:text-orange-300 p-0">
                  Read More →
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};
