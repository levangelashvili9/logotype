import type { Metadata } from "next";

import { Header } from "@/components/layouts/header";

export const metadata: Metadata = {
  title: "Logotype",
  description: "Logotype list page",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className="pb-20 1024:pb-[8.75rem]">{children}</main>
    </>
  );
};

export default RootLayout;
