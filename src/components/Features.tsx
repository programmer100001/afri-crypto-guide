
export const Features = () => {
  const features = [
    {
      icon: "🎓",
      title: "Beginner-Friendly Courses",
      description: "Start from zero and learn cryptocurrency step-by-step with simple explanations and local examples."
    },
    {
      icon: "🇰🇪",
      title: "Kenya-Focused Content",
      description: "Learn how to buy crypto with M-Pesa, understand KRA tax rules, and use exchanges available in Kenya."
    },
    {
      icon: "🔒",
      title: "Security First",
      description: "Master wallet security, spot scams, and protect your investments with expert security guides."
    },
    {
      icon: "📱",
      title: "Mobile-Optimized",
      description: "Access all content on your phone. Perfect for learning on-the-go in the Kenyan mobile-first economy."
    },
    {
      icon: "💬",
      title: "Community Support",
      description: "Join our Telegram group with thousands of Kenyan crypto enthusiasts sharing tips and experiences."
    },
    {
      icon: "📈",
      title: "Market Updates",
      description: "Get daily crypto news, price alerts, and market analysis focused on what matters to African investors."
    }
  ];

  return (
    <section id="features" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Everything You Need to Start Your Crypto Journey
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            From complete beginner to confident investor, we provide all the tools and knowledge you need.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-slate-800/50 rounded-xl p-6 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 border border-slate-700/50">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-slate-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
