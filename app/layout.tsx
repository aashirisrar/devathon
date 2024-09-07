import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "@/app/globals.css";

import ToasterProvider from "@/app/providers/ToasterProvider";

import LoginModal from "@/components/modals/LoginModal";
import RegisterModal from "@/components/modals/RegisterModal";
import { ProModal } from "@/components/dashboard/pro-modal";

import { cn } from "@/lib/utils";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio Generator App",
  description:
    "Create stunning, personalized portfolio websites effortlessly with our Portfolio Generator App. Customize and showcase your projects, skills, and achievements with ease. Ideal for developers, designers, and creatives seeking a professional online presence. No coding required.",
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
        <ProModal />
        {children}
      </body>
    </html>
  );
}
