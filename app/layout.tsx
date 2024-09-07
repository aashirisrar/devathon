import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "@/app/globals.css";

import ToasterProvider from "@/app/providers/ToasterProvider";

import LoginModal from "@/components/modals/LoginModal";
import RegisterModal from "@/components/modals/RegisterModal";

import { cn } from "@/lib/utils";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Patient Co.",
  description: "Easily manage your patients.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <body className={cn(dmSans.className, "antialiased")}>
        <ToasterProvider />
        <LoginModal />
        <RegisterModal />
        {children}
      </body>
    </html>
  );
}
