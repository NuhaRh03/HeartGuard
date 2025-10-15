"use client";

import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase/config";
import { useRouter } from "next/navigation";
import { LogOut, User } from "lucide-react";
import Image from "next/image";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function UserNav() {
  const { user } = useAuth();
  const router = useRouter();
  const avatarImage = PlaceHolderImages.find((img) => img.id === "user-avatar");

  const handleSignOut = async () => {
    await signOut(auth);
    router.push("/");
  };
  
  const getInitials = (email: string | null | undefined) => {
    if (!email) return "U";
    return email[0].toUpperCase();
  };


  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-10 w-10 rounded-full">
          <Avatar className="h-10 w-10">
            <AvatarImage
              src={user?.photoURL || avatarImage?.imageUrl || ""}
              alt={user?.displayName || "User"}
              data-ai-hint={avatarImage?.imageHint || ""}
            />
            <AvatarFallback>{getInitials(user?.email)}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">
              {user?.displayName || "User"}
            </p>
            <p className="text-xs leading-none text-muted-foreground">
              {user?.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleSignOut}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
