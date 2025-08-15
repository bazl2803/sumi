import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, Search, ShoppingCart, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function MainNavbar() {
  return (
    <nav className="sticky inset-x-0 top-0 z-50 w-screen border-b bg-white backdrop-blur-lg transition-all">
      <div className="mx-auto w-full max-w-screen-xl px-2.5 md:px-20">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="ml-4 flex lg:ml-0">
            <Link href="/">
              <Image
                className="w-auto"
                src="/logo-alt.png"
                alt="Logo"
                width={120}
                height={40}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:flex-grow lg:justify-center">
            {/* Search Box (Placeholder) */}
            <div className="relative mx-4 w-full max-w-md">
              <input
                type="text"
                placeholder="Search..."
                className="w-full rounded-md border border-gray-300 px-4 py-2 pl-10 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <Search className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          {/* Icons (Cart & User) */}
          <div className="ml-auto flex items-center">
            <Button variant="ghost" size="icon" aria-label="Search">
              <Search className="h-6 w-6 lg:hidden" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Cart">
              <ShoppingCart className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="User Account">
              <User className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
