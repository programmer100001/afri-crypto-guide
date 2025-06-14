
export const Footer = () => {
  const footerLinks = {
    "Learn": [
      "Crypto 101",
      "Getting Started",
      "Security Basics",
      "Advanced Trading"
    ],
    "Resources": [
      "News & Updates",
      "Tool Reviews",
      "Tax Calculator",
      "Price Alerts"
    ],
    "Community": [
      "Telegram Group",
      "WhatsApp Updates",
      "YouTube Channel",
      "Twitter"
    ],
    "Support": [
      "Contact Us",
      "FAQ",
      "Report Scam",
      "Advertise"
    ]
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-700 py-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">₿</span>
              </div>
              <h3 className="text-xl font-bold text-white">CryptoKenya</h3>
            </div>
            <p className="text-slate-400 mb-4">
              Empowering Kenyans with crypto education and safe investment practices.
            </p>
            <div className="flex space-x-3">
              <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors cursor-pointer">
                <span className="text-sm">📧</span>
              </div>
              <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors cursor-pointer">
                <span className="text-sm">📱</span>
              </div>
              <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors cursor-pointer">
                <span className="text-sm">🐦</span>
              </div>
            </div>
          </div>
          
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-slate-400 hover:text-orange-400 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © 2024 CryptoKenya. All rights reserved. Educational content only, not financial advice.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-slate-400 hover:text-orange-400 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-400 hover:text-orange-400 text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-slate-400 hover:text-orange-400 text-sm transition-colors">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
