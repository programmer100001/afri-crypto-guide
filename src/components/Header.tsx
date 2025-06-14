
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ChevronDown } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const learnCryptoItems = [
    { label: "Crypto 101", href: "/crypto-101", description: "What is crypto? What is blockchain?" },
    { label: "Bitcoin & Ethereum Basics", href: "#bitcoin-ethereum", description: "Top coins explained simply" },
    { label: "How to Buy Crypto in Kenya", href: "/buy-crypto-kenya", description: "Step-by-step with M-Pesa & local banks" },
    { label: "Wallets & Security", href: "/wallets-security", description: "Choose wallets & avoid scams" },
    { label: "NFTs & Tokens Explained", href: "#nfts-tokens", description: "NFTs, DeFi, altcoins basics" },
  ];

  const toolsReviewsItems = [
    { label: "Exchange Reviews", href: "/exchange-reviews", description: "Binance, YellowCard, Mara & more" },
    { label: "Wallet Reviews", href: "#wallet-reviews", description: "Trust Wallet, MetaMask, Ledger" },
    { label: "Price Tracker", href: "#price-tracker", description: "Live crypto prices & converter" },
    { label: "Scam Checker", href: "#scam-checker", description: "Coming Soon" },
  ];

  const localInsightsItems = [
    { label: "Kenya Tax & Regulations", href: "#kenya-tax", description: "KRA guidance & legal status" },
    { label: "Crypto & M-Pesa", href: "#crypto-mpesa", description: "How they work together" },
    { label: "Remittances & Crypto", href: "#remittances", description: "Cheap money transfers" },
    { label: "Kenya News & Updates", href: "/local-insights", description: "Local crypto news" },
  ];

  const coursesItems = [
    { label: "Free Starter Guide (PDF)", href: "#starter-guide", description: "Download our beginner guide" },
    { label: "Premium Course", href: "#premium-course", description: "Crypto Made Simple - Coming Soon" },
    { label: "Webinars & Workshops", href: "#webinars", description: "Live learning sessions" },
  ];

  const communityItems = [
    { label: "Community Hub", href: "/community-hub", description: "Advanced tools & community features" },
    { label: "Join Telegram Group", href: "#telegram", description: "Connect with fellow crypto enthusiasts" },
    { label: "Q&A Forum", href: "#forum", description: "Ask questions & get answers" },
    { label: "Submit a Question", href: "#submit-question", description: "Got a crypto question?" },
  ];

  const aboutItems = [
    { label: "About Us", href: "#about", description: "Our mission & values" },
    { label: "Contact Us", href: "#contact", description: "Get in touch" },
    { label: "Partner With Us", href: "#partner", description: "For advertisers & sponsors" },
  ];

  const renderDropdownContent = (items: typeof learnCryptoItems) => (
    <NavigationMenuContent>
      <div className="grid gap-3 p-6 w-[500px] lg:w-[600px] lg:grid-cols-2 bg-slate-900/95 backdrop-blur-md border border-slate-700/50 rounded-lg shadow-xl">
        {items.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all duration-200 hover:bg-slate-800/70 hover:text-accent-foreground focus:bg-slate-800/70 focus:text-accent-foreground hover:scale-105 hover:shadow-lg"
          >
            <div className="text-sm font-medium leading-none text-white">{item.label}</div>
            <p className="line-clamp-2 text-xs leading-snug text-slate-400">
              {item.description}
            </p>
          </a>
        ))}
      </div>
    </NavigationMenuContent>
  );

  return (
    <header className="bg-slate-900/30 backdrop-blur-lg border-b border-slate-700/30 sticky top-0 z-50 transition-all duration-300 hover:bg-slate-900/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center transition-transform duration-200 hover:scale-110">
              <span className="text-white font-bold text-sm">₿</span>
            </div>
            <a href="/" className="text-xl font-bold text-white hover:text-orange-400 transition-all duration-200 hover:scale-105">
              CryptoKenya
            </a>
          </div>
          
          {!isMobile ? (
            <div className="flex items-center space-x-6">
              <NavigationMenu>
                <NavigationMenuList className="bg-transparent">
                  <NavigationMenuItem>
                    <a href="/" className="text-slate-300 hover:text-white transition-all duration-200 px-3 py-2 rounded-md hover:bg-white/10 hover:scale-105">
                      Home
                    </a>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent text-slate-300 hover:text-white data-[active]:bg-transparent data-[state=open]:bg-transparent hover:bg-white/10 transition-all duration-200 hover:scale-105">
                      Learn Crypto
                    </NavigationMenuTrigger>
                    {renderDropdownContent(learnCryptoItems)}
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent text-slate-300 hover:text-white data-[active]:bg-transparent data-[state=open]:bg-transparent hover:bg-white/10 transition-all duration-200 hover:scale-105">
                      Tools & Reviews
                    </NavigationMenuTrigger>
                    {renderDropdownContent(toolsReviewsItems)}
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent text-slate-300 hover:text-white data-[active]:bg-transparent data-[state=open]:bg-transparent hover:bg-white/10 transition-all duration-200 hover:scale-105">
                      Local Insights
                    </NavigationMenuTrigger>
                    {renderDropdownContent(localInsightsItems)}
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent text-slate-300 hover:text-white data-[active]:bg-transparent data-[state=open]:bg-transparent hover:bg-white/10 transition-all duration-200 hover:scale-105">
                      Courses
                    </NavigationMenuTrigger>
                    {renderDropdownContent(coursesItems)}
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent text-slate-300 hover:text-white data-[active]:bg-transparent data-[state=open]:bg-transparent hover:bg-white/10 transition-all duration-200 hover:scale-105">
                      Community
                    </NavigationMenuTrigger>
                    {renderDropdownContent(communityItems)}
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent text-slate-300 hover:text-white data-[active]:bg-transparent data-[state=open]:bg-transparent hover:bg-white/10 transition-all duration-200 hover:scale-105">
                      About
                    </NavigationMenuTrigger>
                    {renderDropdownContent(aboutItems)}
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <Button className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 transition-all duration-200 hover:scale-105 hover:shadow-lg">
                Start Here
              </Button>
            </div>
          ) : (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:bg-white/10 transition-all duration-200 hover:scale-105"
            >
              ☰
            </Button>
          )}
        </div>
        
        {isMobile && isMenuOpen && (
          <div className="mt-4 pb-4 border-t border-slate-700/30 pt-4 bg-slate-900/20 backdrop-blur-md rounded-lg transition-all duration-300 transform animate-in slide-in-from-top-2">
            <nav className="flex flex-col space-y-4">
              <a href="/" className="text-slate-300 hover:text-white transition-all duration-200 hover:bg-white/10 rounded-md px-3 py-2">
                Home
              </a>
              
              <div className="space-y-2">
                <div className="text-slate-300 font-medium flex items-center hover:text-white transition-all duration-200 hover:bg-white/10 rounded-md px-3 py-2">
                  Learn Crypto <ChevronDown className="ml-1 h-3 w-3" />
                </div>
                <div className="pl-4 space-y-2">
                  {learnCryptoItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block text-slate-400 hover:text-white text-sm transition-all duration-200 hover:bg-white/10 rounded-md px-3 py-2 hover:translate-x-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-slate-300 font-medium flex items-center hover:text-white transition-all duration-200 hover:bg-white/10 rounded-md px-3 py-2">
                  Tools & Reviews <ChevronDown className="ml-1 h-3 w-3" />
                </div>
                <div className="pl-4 space-y-2">
                  {toolsReviewsItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block text-slate-400 hover:text-white text-sm transition-all duration-200 hover:bg-white/10 rounded-md px-3 py-2 hover:translate-x-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-slate-300 font-medium flex items-center hover:text-white transition-all duration-200 hover:bg-white/10 rounded-md px-3 py-2">
                  Local Insights <ChevronDown className="ml-1 h-3 w-3" />
                </div>
                <div className="pl-4 space-y-2">
                  {localInsightsItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block text-slate-400 hover:text-white text-sm transition-all duration-200 hover:bg-white/10 rounded-md px-3 py-2 hover:translate-x-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-slate-300 font-medium flex items-center hover:text-white transition-all duration-200 hover:bg-white/10 rounded-md px-3 py-2">
                  Community <ChevronDown className="ml-1 h-3 w-3" />
                </div>
                <div className="pl-4 space-y-2">
                  {communityItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block text-slate-400 hover:text-white text-sm transition-all duration-200 hover:bg-white/10 rounded-md px-3 py-2 hover:translate-x-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>

              <Button className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 mt-4 transition-all duration-200 hover:scale-105 hover:shadow-lg">
                Start Here
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
