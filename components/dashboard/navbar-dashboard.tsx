"use client";

import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Menu, Package2 } from "lucide-react";
import { signOut } from "next-auth/react";

import { SafeUser } from "@/types";

import { routes } from "./sidebar-dashboard";

import { useProModal } from "@/app/hooks/useProModal";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import Avatar from "../Avatar";

interface NavbarDashboardProps {
  currentUser?: SafeUser | null;
  isPro?: boolean;
}

const NavbarDashboard: React.FC<NavbarDashboardProps> = ({
  currentUser,
  isPro,
}) => {
  const pathName = usePathname();

  const [open, setOpen] = useState(false);

  const toggleSignOut = () => {
    setOpen(!open);
  };

  return (
    <header className="md:hidden flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col">
          <nav className="grid gap-2 text-lg font-medium">
            <Link
              href="/dashboard"
              className="flex items-center gap-2 text-lg font-semibold mb-2"
            >
              <Package2 className="h-6 w-6" />
              <span className="sr-only">Patient Co.</span>
            </Link>
            {routes.map((route) => (
              <Link
                href={route.href}
                key={route.href}
                className={cn(
                  "mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground",
                  pathName === route.href
                    ? "bg-muted text-primary"
                    : "text-muted-foreground "
                )}
              >
                <route.icon className="h-4 w-4" />
                {route.label}
              </Link>
            ))}
          </nav>
          {currentUser?.email && (
            <div
              className={cn(
                "cursor-pointer shadow-sm border mb-3 p-3 bg-card rounded-lg relative",
                isPro ? "mt-auto" : ""
              )}
            >
              <div
                onClick={toggleSignOut}
                className="flex items-center justify-start gap-2"
              >
                <Avatar src={currentUser?.image} />
                <div className="truncate font-semibold">
                  @{currentUser?.email}
                </div>
              </div>
              <div
                onClick={() => signOut()}
                className={cn(
                  "items-center justify-center w-full absolute -left-[1px] -top-10 bg-card text-card-foreground rounded-md border shadow-md h-10 hidden",
                  open ? "flex" : ""
                )}
              >
                Sign Out
              </div>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default NavbarDashboard;
