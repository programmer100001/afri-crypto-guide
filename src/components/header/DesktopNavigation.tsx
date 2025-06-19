
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Settings, User, LogOut } from "lucide-react";
import { navigationData } from "./navigationData";
import { useAuth } from "@/hooks/useAuth";
import { LoginModal } from "@/components/auth/LoginModal";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const menuKeys = [
  { key: "learnCryptoItems", label: "Learn Crypto" },
  { key: "toolsReviewsItems", label: "Tools & Reviews" },
  { key: "localInsightsItems", label: "Local Insights" },
  { key: "coursesItems", label: "Courses" },
  { key: "communityItems", label: "Community" },
  { key: "aboutItems", label: "About" },
];

const renderDropdownContent = (
  items: { label: string; href: string; description: string }[]
) => (
  <NavigationMenuContent>
    <div className="grid gap-3 p-6 w-[500px] lg:w-[600px] lg:grid-cols-2 bg-slate-900/95 backdrop-blur-md border border-slate-700/50 rounded-lg shadow-xl">
      {items.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all duration-200 hover:bg-slate-800/70 hover:text-accent-foreground focus:bg-slate-800/70 focus:text-accent-foreground hover:scale-105 hover:shadow-lg"
        >
          <div className="text-sm font-medium leading-none text-white">
            {item.label}
          </div>
          <p className="line-clamp-2 text-xs leading-snug text-slate-400">
            {item.description}
          </p>
        </a>
      ))}
    </div>
  </NavigationMenuContent>
);

export const DesktopNavigation = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const { user, logout } = useAuth();

  return (
    <div className="flex items-center space-x-6">
      <NavigationMenu>
        <NavigationMenuList className="bg-transparent">
          <NavigationMenuItem>
            <a href="/" className="text-slate-300 hover:text-white transition-all duration-200 px-3 py-2 rounded-md hover:bg-white/10 hover:scale-105">
              Home
            </a>
          </NavigationMenuItem>
          {menuKeys.map(({ key, label }) => {
            const items = navigationData[key as keyof typeof navigationData] as { label: string; href: string; description: string }[];
            if (!items) return null;
            return (
              <NavigationMenuItem key={key}>
                <NavigationMenuTrigger className="bg-transparent text-slate-300 hover:text-white data-[active]:bg-transparent data-[state=open]:bg-transparent hover:bg-white/10 transition-all duration-200 hover:scale-105">
                  {label}
                </NavigationMenuTrigger>
                {renderDropdownContent(items)}
              </NavigationMenuItem>
            );
          })}
          {user?.role === 'admin' && (
            <NavigationMenuItem>
              <a 
                href="/admin" 
                className="text-slate-300 hover:text-orange-400 transition-all duration-200 px-3 py-2 rounded-md hover:bg-white/10 hover:scale-105 flex items-center gap-1"
              >
                <Settings className="h-4 w-4" />
                Admin
              </a>
            </NavigationMenuItem>
          )}
        </NavigationMenuList>
      </NavigationMenu>
      
      <div className="flex items-center gap-3">
        {user ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-2 hover:bg-white/10">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={user.avatar} />
                  <AvatarFallback className="bg-orange-500 text-white text-sm">
                    {user.name.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <span className="text-white">{user.name}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-slate-900 border-slate-700">
              <DropdownMenuItem className="text-white hover:bg-slate-800">
                <User className="mr-2 h-4 w-4" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem onClick={logout} className="text-white hover:bg-slate-800">
                <LogOut className="mr-2 h-4 w-4" />
                Sign Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Button 
            onClick={() => setShowLoginModal(true)}
            variant="outline"
            className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
          >
            Sign In
          </Button>
        )}
        
        <Button className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 transition-all duration-200 hover:scale-105 hover:shadow-lg">
          Start Here
        </Button>
      </div>
      
      <LoginModal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} />
    </div>
  );
};
