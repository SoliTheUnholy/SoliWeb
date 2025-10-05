import React from "react";
import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function Container({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 64)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset className="@container/main grow grid overflow-clip rounded-4xl">
        <SiteHeader />
        <div className="bg-background w-full absolute overflow-clip md:min-w-96 min-w-screen transition-all duration-500">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
