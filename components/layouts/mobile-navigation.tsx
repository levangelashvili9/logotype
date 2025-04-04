"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

import images from "@/config/images.config";
import {
  NavigationItem,
  useNavigationConfig,
} from "@/config/navigation.config";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "@/i18n/routing";

export const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const navigationConfig = useNavigationConfig();

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild className="flex 1024:hidden">
        <Menu strokeWidth={"3"} className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="fixed left-0 top-0 h-screen w-[85vw] bg-background p-0 768:w-[65vw]"
        aria-describedby={undefined}
      >
        <SheetHeader className="border-border-light mb-4 border-b px-5 py-8 768:px-8">
          <SheetTitle className="flex items-center justify-between">
            <Image
              src={images.logo}
              alt="Logo"
              width={120}
              height={120}
              className="cursor-pointer"
            />

            <SheetClose>
              <X strokeWidth={"3"} className="size-5 cursor-pointer" />
            </SheetClose>
          </SheetTitle>
        </SheetHeader>

        <nav className="px-5 768:px-8">
          <Accordion type="single" collapsible>
            {navigationConfig.map((nav) => (
              <MobileNavigationItem key={nav.id} navigationItem={nav} />
            ))}
          </Accordion>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

type MobileNavigationItemProps = {
  navigationItem: NavigationItem;
};

export const MobileNavigationItem: React.FC<MobileNavigationItemProps> = ({
  navigationItem,
}) => {
  return (
    <>
      {navigationItem.subItems ? (
        <AccordionItem
          key={navigationItem.id}
          value={`item-${navigationItem.id}`}
        >
          <AccordionTrigger>{navigationItem.title}</AccordionTrigger>
          <AccordionContent className="px-8">
            <Accordion type="single" collapsible>
              {navigationItem.subItems.map((subItem) => (
                <MobileNavigationItem
                  key={subItem.id}
                  navigationItem={subItem}
                />
              ))}
            </Accordion>
          </AccordionContent>
        </AccordionItem>
      ) : (
        <Link
          key={navigationItem.id}
          href={"#"}
          className="hover:text-primary-hover block cursor-pointer py-4 font-medium text-primary"
        >
          {navigationItem.title}
        </Link>
      )}
    </>
  );
};
