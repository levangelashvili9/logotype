import { useTranslations } from "next-intl";

export interface NavigationItem {
  id: number;
  title: string;
  subItems?: NavigationItem[];
}

export const useNavigationConfig = () => {
  const t = useTranslations("layout.header.navigation");

  const navigationConfig: NavigationItem[] = [
    {
      id: 0,
      title: t("demos"),
      subItems: [
        {
          id: 0,
          title: "Submenu 1",
        },
        {
          id: 1,
          title: "Submenu 2",
        },
        {
          id: 2,
          title: "Submenu 3",
        },
        {
          id: 3,
          title: "Submenu 4",
        },
      ],
    },
    {
      id: 1,
      title: t("post"),
      subItems: [
        {
          id: 0,
          title: "Submenu 1",
        },
        {
          id: 1,
          title: "Submenu 2",
        },
        {
          id: 2,
          title: "Submenu 3",
        },
        {
          id: 3,
          title: "Submenu 4",
        },
      ],
    },
    {
      id: 2,
      title: t("features"),
      subItems: [
        {
          id: 0,
          title: "Submenu 1",
        },
        {
          id: 1,
          title: "Submenu 2",
        },
        {
          id: 2,
          title: "Submenu 3",
        },
        {
          id: 3,
          title: "Submenu 4",
        },
      ],
    },
    {
      id: 3,
      title: t("categories"),
      subItems: [
        {
          id: 0,
          title: "Submenu 1",
        },
        {
          id: 1,
          title: "Submenu 2",
        },
        {
          id: 2,
          title: "Submenu 3",
        },
        {
          id: 3,
          title: "Submenu 4",
        },
      ],
    },
    {
      id: 4,
      title: t("shop"),
      subItems: [
        {
          id: 0,
          title: "Submenu 1",
        },
        {
          id: 1,
          title: "Submenu 2",
        },
        {
          id: 2,
          title: "Submenu 3",
        },
        {
          id: 3,
          title: "Submenu 4",
        },
      ],
    },
    {
      id: 5,
      title: t("buy-now"),
    },
  ];

  return navigationConfig;
};
