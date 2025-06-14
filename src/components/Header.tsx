
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
      <div className="grid gap-3 p-6 w-[500px] lg:w-[600px] lg:grid-cols-2">
        {items.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-800 hover:text-accent-foreground focus:bg-slate-800 focus:text-accent-foreground"
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
    <header className="bg-slate-900/90 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">₿</span>
            </div>
            <a href="/" className="text-xl font-bold text-white hover:text-orange-400 transition-colors">
              CryptoKenya
            </a>
          </div>
          
          {!isMobile ? (
            <div className="flex items-center space-x-6">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <a href="/" className="text-slate-300 hover:text-white transition-colors px-3 py-2">
                      Home
                    </a>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent text-slate-300 hover:text-white data-[active]:bg-transparent data-[state=open]:bg-transparent">
                      Learn Crypto
                    </NavigationMenuTrigger>
                    {renderDropdownContent(learnCryptoItems)}
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent text-slate-300 hover:text-white data-[active]:bg-transparent data-[state=open]:bg-transparent">
                      Tools & Reviews
                    </NavigationMenuTrigger>
                    {renderDropdownContent(toolsReviewsItems)}
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent text-slate-300 hover:text-white data-[active]:bg-transparent data-[state=open]:bg-transparent">
                      Local Insights
                    </NavigationMenuTrigger>
                    {renderDropdownContent(localInsightsItems)}
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent text-slate-300 hover:text-white data-[active]:bg-transparent data-[state=open]:bg-transparent">
                      Courses
                    </NavigationMenuTrigger>
                    {renderDropdownContent(coursesItems)}
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent text-slate-300 hover:text-white data-[active]:bg-transparent data-[state=open]:bg-transparent">
                      Community
                    </NavigationMenuTrigger>
                    {renderDropdownContent(communityItems)}
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent text-slate-300 hover:text-white data-[active]:bg-transparent data-[state=open]:bg-transparent">
                      About
                    </NavigationMenuTrigger>
                    {renderDropdownContent(aboutItems)}
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <Button className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600">
                Start Here
              </Button>
            </div>
          ) : (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white"
            >
              ☰
            </Button>
          )}
        </div>
        
        {isMobile && isMenuOpen && (
          <div className="mt-4 pb-4 border-t border-slate-700 pt-4">
            <nav className="flex flex-col space-y-4">
              <a href="/" className="text-slate-300 hover:text-white transition-colors">
                Home
              </a>
              
              <div className="space-y-2">
                <div className="text-slate-300 font-medium flex items-center">
                  Learn Crypto <ChevronDown className="ml-1 h-3 w-3" />
                </div>
                <div className="pl-4 space-y-2">
                  {learnCryptoItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block text-slate-400 hover:text-white text-sm transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-slate-300 font-medium flex items-center">
                  Tools & Reviews <ChevronDown className="ml-1 h-3 w-3" />
                </div>
                <div className="pl-4 space-y-2">
                  {toolsReviewsItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block text-slate-400 hover:text-white text-sm transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-slate-300 font-medium flex items-center">
                  Local Insights <ChevronDown className="ml-1 h-3 w-3" />
                </div>
                <div className="pl-4 space-y-2">
                  {localInsightsItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block text-slate-400 hover:text-white text-sm transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-slate-300 font-medium flex items-center">
                  Community <ChevronDown className="ml-1 h-3 w-3" />
                </div>
                <div className="pl-4 space-y-2">
                  {communityItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block text-slate-400 hover:text-white text-sm transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>

              <Button className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 mt-4">
                Start Here
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
