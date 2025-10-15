"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { HeartPulse } from "lucide-react";

import { useAuth } from "@/hooks/use-auth";
import { SignupForm } from "@/components/auth/signup-form";
import { Button } from "@/components/ui/button";

export default function SignupPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && user) {
      router.replace("/dashboard");
    }
  }, [user, loading, router]);

  if (loading || (!loading && user)) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <HeartPulse className="h-12 w-12 animate-pulse text-primary" />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex h-16 items-center justify-between border-b bg-card px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <HeartPulse className="h-6 w-6 text-primary" />
          <span className="text-lg font-semibold">PulseGuard</span>
        </Link>
        <Button asChild variant="secondary">
          <Link href="/">Sign In</Link>
        </Button>
      </header>
      <main className="flex flex-1 items-center justify-center p-4">
        <div className="w-full max-w-md space-y-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight">
              Create an Account
            </h1>
            <p className="mt-2 text-muted-foreground">
              Start monitoring your health today.
            </p>
          </div>
          <SignupForm />
        </div>
      </main>
    </div>
  );
}
