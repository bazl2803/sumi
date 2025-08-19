import type { Metadata } from "next";
import "../globals.css";
import { Toaster } from "@/components/ui/sonner";
import { Inter } from "next/font/google";
import { Navbar, NavbarItem } from "@/components/ui/navbar";
import { LucideHome, LucideTags, LucideShoppingCart, LucideUser, LucideTerminal } from "lucide-react";

export const metadata: Metadata = {
  title: "Suministros Eléctricos",
  description: "Lideres en electricidad",
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} h-screen antialiased`}>
        <main>{children}</main>
        <Toaster />
        <Navbar className="fixed inset-x-2 bottom-2" defaultValue="home">
          <NavbarItem
            icon={<LucideHome />}
            value="home"
            label="Inicio"
            href="/"
          />

          <NavbarItem
            icon={<LucideTags />}
            value="categories"
            label="Categorias"
            href="/categories"
          />

          <NavbarItem
            icon={<LucideShoppingCart />}
            value="cart"
            label="Carrito"
            href="/cart"
          />

          <NavbarItem
            icon={<LucideUser />}
            value="profile"
            label="Perfil"
            href="/profile"
          />

          <NavbarItem
            className="bg-yellow-300"
            icon={<LucideTerminal />}
            value="console"
            label="Consola"
            href="/admin"
          />
        </Navbar>
      </body>
    </html>
  );
}
