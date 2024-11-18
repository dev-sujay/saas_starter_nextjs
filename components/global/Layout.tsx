import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

import React from "react";
import AppSidebar from "../sidebar/AppSidebar";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { ThemeToggle } from "./ThemeToggle";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center px-4">
            <SidebarTrigger className="-ml-1" />
          </div>
          <div className="flex items-center gap-2 ml-auto mr-4">
            <ThemeToggle />
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </header>
        <div className="p-4 pt-0">
          <div className="h-[85vh] rounded-xl bg-muted/50  p-4 overflow-x-hidden overscroll-y-auto">
            {children}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default Layout;
