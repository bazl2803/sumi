import type { Metadata } from "next";
import "../globals.css";
import { Toaster } from "@/components/ui/sonner";
import { Inter } from "next/font/google";

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
      </body>
    </html>
  );
}
