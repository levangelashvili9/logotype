"use client";

import { useNavigationConfig } from "@/config/navigation.config";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export const DesktopNavigation = () => {
  const navigationConfig = useNavigationConfig();

  return (
    <nav className="border-border-light hidden h-[3.75rem] items-center justify-center gap-7 border-y 1024:flex">
      <div className="flex gap-8">
        {navigationConfig.map((nav) => (
          <NavigationMenu key={nav.id}>
            <NavigationMenuTrigger href="#" hasSubItems={!!nav.subItems}>
              {nav.title}
            </NavigationMenuTrigger>
            {!!nav.subItems && (
              <NavigationMenuContent>
                {nav.subItems.map((subitem) => (
                  <NavigationMenuItem key={subitem.id} href="#" hasSubmenu>
                    {subitem.title}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuContent>
            )}
          </NavigationMenu>
        ))}
      </div>
    </nav>
  );
};
