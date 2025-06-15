
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Settings } from "lucide-react";
import { navigationData } from "./navigationData";

const renderDropdownContent = (items: typeof navigationData.learnCryptoItems) => (
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

export const DesktopNavigation = () => {
  return (
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
            {renderDropdownContent(navigationData.learnCryptoItems)}
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent text-slate-300 hover:text-white data-[active]:bg-transparent data-[state=open]:bg-transparent hover:bg-white/10 transition-all duration-200 hover:scale-105">
              Tools & Reviews
            </NavigationMenuTrigger>
            {renderDropdownContent(navigationData.toolsReviewsItems)}
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent text-slate-300 hover:text-white data-[active]:bg-transparent data-[state=open]:bg-transparent hover:bg-white/10 transition-all duration-200 hover:scale-105">
              Local Insights
            </NavigationMenuTrigger>
            {renderDropdownContent(navigationData.localInsightsItems)}
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent text-slate-300 hover:text-white data-[active]:bg-transparent data-[state=open]:bg-transparent hover:bg-white/10 transition-all duration-200 hover:scale-105">
              Courses
            </NavigationMenuTrigger>
            {renderDropdownContent(navigationData.coursesItems)}
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent text-slate-300 hover:text-white data-[active]:bg-transparent data-[state=open]:bg-transparent hover:bg-white/10 transition-all duration-200 hover:scale-105">
              Community
            </NavigationMenuTrigger>
            {renderDropdownContent(navigationData.communityItems)}
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent text-slate-300 hover:text-white data-[active]:bg-transparent data-[state=open]:bg-transparent hover:bg-white/10 transition-all duration-200 hover:scale-105">
              About
            </NavigationMenuTrigger>
            {renderDropdownContent(navigationData.aboutItems)}
          </NavigationMenuItem>

          <NavigationMenuItem>
            <a 
              href="/admin" 
              className="text-slate-300 hover:text-orange-400 transition-all duration-200 px-3 py-2 rounded-md hover:bg-white/10 hover:scale-105 flex items-center gap-1"
            >
              <Settings className="h-4 w-4" />
              Admin
            </a>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <Button className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 transition-all duration-200 hover:scale-105 hover:shadow-lg">
        Start Here
      </Button>
    </div>
  );
};
