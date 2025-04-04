"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const NavigationMenu = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  return (
    <nav className={cn("relative inline-block", className)} {...props}>
      {children}
    </nav>
  );
};

const NavigationMenuGroup = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("group relative", className)} {...props}>
    {children}
  </div>
);
NavigationMenuGroup.displayName = "NavigationMenuGroup";

const NavigationMenuTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => (
  <button
    ref={ref}
    className={cn("rounded-md bg-gray-800 px-4 py-2 text-white", className)}
    {...props}
  />
));
NavigationMenuTrigger.displayName = "NavigationMenuTrigger";

const NavigationMenuContent = React.forwardRef<
  HTMLUListElement,
  React.HTMLAttributes<HTMLUListElement>
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn(
      "invisible absolute left-0 top-full mt-0 w-48 rounded-lg border bg-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:visible group-hover:opacity-100",
      className,
    )}
    {...props}
  />
));
NavigationMenuContent.displayName = "NavigationMenuContent";

const NavigationMenuItem = React.forwardRef<
  HTMLLIElement,
  React.LiHTMLAttributes<HTMLLIElement>
>(({ className, children, ...props }, ref) => (
  <li ref={ref} className={cn("group relative", className)} {...props}>
    {children}
  </li>
));
NavigationMenuItem.displayName = "NavigationMenuItem";

const NavigationMenuLink = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement>
>(({ className, ...props }, ref) => (
  <a
    ref={ref}
    className={cn("block px-4 py-2 hover:bg-gray-100", className)}
    {...props}
  />
));
NavigationMenuLink.displayName = "NavigationMenuLink";

export {
  NavigationMenu,
  NavigationMenuGroup,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
};
