"use client";

import * as React from "react";
import { Link } from "@/i18n/routing";
import { ChevronDown, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

const NavigationMenu = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("group relative", className)} {...props}>
    {children}
  </div>
);
NavigationMenu.displayName = "NavigationMenu";

interface NavigationMenuTriggerProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  hasSubItems?: boolean;
}

const NavigationMenuTrigger = React.forwardRef<
  HTMLAnchorElement,
  NavigationMenuTriggerProps
>(({ className, children, href, hasSubItems, ...props }, ref) => (
  <Link
    ref={ref}
    href={href}
    className={cn(
      "hover:text-primary-hover flex cursor-pointer items-center gap-1 py-4 font-medium text-primary",
      className,
    )}
    {...props}
  >
    {children}
    {hasSubItems && <ChevronDown strokeWidth={2.25} className="size-3.5" />}
  </Link>
));
NavigationMenuTrigger.displayName = "NavigationMenuTrigger";

const NavigationMenuContent = React.forwardRef<
  HTMLUListElement,
  React.HTMLAttributes<HTMLUListElement>
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn(
      "invisible absolute left-0 top-full mt-0 w-[11rem] border bg-white py-5 opacity-0 shadow-lg transition-opacity duration-200 group-hover:visible group-hover:opacity-100",
      className,
    )}
    {...props}
  />
));
NavigationMenuContent.displayName = "NavigationMenuContent";

interface NavigationMenuItemProps
  extends React.ComponentPropsWithoutRef<typeof Link> {
  hasSubmenu?: boolean;
}

const NavigationMenuItem = React.forwardRef<
  HTMLAnchorElement,
  NavigationMenuItemProps
>(({ className, children, hasSubmenu, ...props }, ref) => (
  <Link
    ref={ref}
    className={cn(
      "hover:text-primary-hover border-border-light flex h-full w-full items-center justify-between border-b px-5 py-2 first:pt-0 last:border-none last:pb-0",
      className,
    )}
    {...props}
  >
    {children}
    {hasSubmenu && <ChevronRight strokeWidth={2.25} className="size-3.5" />}
  </Link>
));
NavigationMenuItem.displayName = "NavigationMenuItem";

export {
  NavigationMenu,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuItem,
};
