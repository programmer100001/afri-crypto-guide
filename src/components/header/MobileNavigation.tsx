
import { Button } from "@/components/ui/button";
import { ChevronDown, Settings } from "lucide-react";
import { navigationData } from "./navigationData";

interface MobileNavigationProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

export const MobileNavigation = ({ isMenuOpen, setIsMenuOpen }: MobileNavigationProps) => {
  if (!isMenuOpen) return null;

  return (
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
            {navigationData.learnCryptoItems.map((item) => (
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
            {navigationData.toolsReviewsItems.map((item) => (
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
            {navigationData.localInsightsItems.map((item) => (
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
            {navigationData.communityItems.map((item) => (
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

        <a 
          href="/admin" 
          className="text-slate-300 hover:text-orange-400 transition-all duration-200 hover:bg-white/10 rounded-md px-3 py-2 flex items-center gap-2"
          onClick={() => setIsMenuOpen(false)}
        >
          <Settings className="h-4 w-4" />
          Admin Panel
        </a>

        <Button className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 mt-4 transition-all duration-200 hover:scale-105 hover:shadow-lg">
          Start Here
        </Button>
      </nav>
    </div>
  );
};
