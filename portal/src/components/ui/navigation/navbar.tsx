// components/navigation/Navbar.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel,
  DropdownMenuSeparator, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import IronIngotIcon from "@/components/ui/icons/IronIngotIcon";

export default function Navbar({ user }: { user?: { name?: string, image?: string } | null }) {
  return (
    <nav className="border-b bg-background">
      <div className="container mx-auto h-14 px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2" aria-label="Go to homepage">
          <IronIngotIcon className="h-6 w-6" />
          <span className="font-semibold text-lg tracking-tight">foundre</span>
        </Link>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-4">
            <Link href="/docs" className="text-sm hover:underline">Documentation</Link>
            <Link href="/projects" className="text-sm hover:underline">Projects</Link>
          </nav>

          <Separator orientation="vertical" className="h-6" />

          {/* User menu (example) */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                {user?.name ?? "Account"}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-40">
              <DropdownMenuLabel>{user?.name ?? "Guest"}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {user ? (
                <>
                  <DropdownMenuItem asChild><Link href="/profile">Profile</Link></DropdownMenuItem>
                  <DropdownMenuItem asChild><Link href="/settings">Settings</Link></DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild><form action="/api/auth/signout" method="post"><button className="w-full text-left">Sign out</button></form></DropdownMenuItem>
                </>
              ) : (
                <DropdownMenuItem asChild><Link href="/login">Sign in</Link></DropdownMenuItem>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
}
