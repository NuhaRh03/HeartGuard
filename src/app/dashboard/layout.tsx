"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  HeartPulse,
  LayoutDashboard,
  Loader2,
  PanelLeft,
} from "lucide-react";
import { useAuth } from "@/hooks/use-auth";

import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Skeleton } from "@/components/ui/skeleton";
import { UserNav } from "@/components/dashboard/user-nav";
import { Button } from "@/components/ui/button";

function DashboardSkeleton() {
  return (
    <div className="flex h-screen w-full bg-background">
      <div className="hidden w-64 shrink-0 border-r bg-card p-4 md:flex md:flex-col">
        <div className="mb-8 flex items-center gap-2">
          <Skeleton className="h-8 w-8" />
          <Skeleton className="h-6 w-32" />
        </div>
        <div className="space-y-4">
          <Skeleton className="h-8 w-full" />
          <Skeleton className="h-8 w-full" />
        </div>
      </div>
      <div className="flex-1">
        <header className="flex h-16 items-center justify-between border-b px-6">
          <Skeleton className="h-8 w-8" />
          <Skeleton className="h-10 w-10 rounded-full" />
        </header>
        <main className="p-6">
          <Skeleton className="h-96 w-full" />
        </main>
      </div>
    </div>
  );
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/");
    }
  }, [user, loading, router]);

  if (loading || !user) {
    return <DashboardSkeleton />;
  }

  return (
    <SidebarProvider>
      <Sidebar collapsible="icon">
        <SidebarHeader>
          <Button variant="ghost" size="icon" className="h-11 w-11" asChild>
            <Link href="/dashboard">
              <HeartPulse className="h-6 w-6 text-primary" />
            </Link>
          </Button>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                tooltip="Dashboard"
                asChild
                isActive
              >
                <Link href="/dashboard">
                  <LayoutDashboard />
                  <span>Dashboard</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
      <SidebarInset>
        <header className="flex h-16 items-center justify-between border-b bg-card px-4 sm:px-6">
          <SidebarTrigger>
            <PanelLeft />
          </SidebarTrigger>
          <div className="flex items-center gap-4">
            <UserNav />
          </div>
        </header>
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
