"use client";

import { useEffect, useState } from "react";
import { Link } from "@/i18n/routing";
import Image from "next/image";

import { cn } from "@/lib/utils";
import images from "@/config/images.config";
import { paths } from "@/config/paths.config";

import { DesktopNavigation } from "@/components/layouts/desktop-navigation";
import { MobileNavigation } from "@/components/layouts/mobile-navigation";
import { GlobalSearch } from "@/components/layouts/global-search";

export const Header = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isHidden, setIsHidden] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // show header if scrolling up/at the top of the page
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsHidden(false);
      }

      // hide header if scrolling down (after 200px)
      else if (currentScrollY > 200) {
        setIsHidden(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={cn(
        `sticky top-0 z-20 w-full bg-background transition-transform duration-300`,
        {
          "-translate-y-full": isHidden,
        },
      )}
    >
      <div className="root-container flex h-20 w-full items-center justify-between transition-shadow duration-300">
        {!isSearchActive && (
          <>
            <MobileNavigation />
            <Link href={paths.home.getHref()}>
              <Image
                src={images.logo}
                alt="logo"
                width={160}
                height={24}
                className="cursor-pointer 1024:h-[1.75rem] 1024:w-[11.25rem]"
              />
            </Link>
          </>
        )}

        <GlobalSearch
          isActive={isSearchActive}
          setIsActive={setIsSearchActive}
        />
      </div>

      <DesktopNavigation />
    </header>
  );
};
