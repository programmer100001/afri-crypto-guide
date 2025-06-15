
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { Logo } from "./header/Logo";
import { DesktopNavigation } from "./header/DesktopNavigation";
import { MobileNavigation } from "./header/MobileNavigation";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <header className="bg-slate-900/30 backdrop-blur-lg border-b border-slate-700/30 sticky top-0 z-50 transition-all duration-300 hover:bg-slate-900/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Logo />
          
          {!isMobile ? (
            <DesktopNavigation />
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
        
        <MobileNavigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </div>
    </header>
  );
};
