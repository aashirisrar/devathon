"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Bell,
  Layout,
  Package2,
  PanelTop,
  Settings,
  UserRound,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

import Avatar from "../Avatar";

import { SafeUser } from "@/types";

export const routes = [
  {
    label: "Dashboard",
    icon: Layout,
    href: "/dashboard",
  },
  {
    label: "Appointments",
    icon: PanelTop,
    href: "/appointments",
  },
  {
    label: "Patients",
    icon: UserRound,
    href: "/patients",
  },
  {
    label: "Profile",
    icon: Settings,
    href: "/profile",
  },
];

interface SidebarDashboardProps {
  currentUser?: SafeUser | null;
  isPro?: boolean;
}

const SidebarDashboard: React.FC<SidebarDashboardProps> = ({
  currentUser,
  isPro,
}) => {
  const [open, setOpen] = useState(false);

  const pathName = usePathname();

  const toggleSignOut = () => {
    setOpen(!open);
  };

  return (
    <div className="fixed md:w-[220px] xl:w-[280px] flex h-full max-h-screen flex-col gap-2">
      <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
        <Link
          href="/dashboard"
          className="flex items-center gap-2 font-semibold"
        >
          <Package2 className="h-6 w-6" />
          <span className="">Patient Co.</span>
        </Link>
        <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
          <Bell className="h-4 w-4" />
          <span className="sr-only">Toggle notifications</span>
        </Button>
      </div>
      <div className="flex-1">
        <nav className="relative grid items-start px-2 text-sm font-semibold lg:px-4">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-3 transition-all hover:text-primary",
                pathName === route.href
                  ? "bg-white text-primary before:absolute before:bg-primary before:w-[6px] before:h-9 before:left-1 before:rounded-full"
                  : "text-muted-foreground "
              )}
            >
              <route.icon className="h-4 w-4" />
              {route.label}
            </Link>
          ))}
        </nav>
      </div>
      {currentUser?.email && (
        <div className="cursor-pointer shadow-sm border mx-4 mb-3 mt-auto p-3 bg-card rounded-lg relative">
          <div
            onClick={toggleSignOut}
            className="flex items-center justify-start gap-2"
          >
            <Avatar src={currentUser?.image} />
            <div className="truncate font-semibold">@{currentUser?.email}</div>
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
    </div>
  );
};

export default SidebarDashboard;
