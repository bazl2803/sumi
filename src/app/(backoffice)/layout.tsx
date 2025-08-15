import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "./admin/_components/dashboard-sidebar";
import { Inter } from "next/font/google";
import '../globals.css'

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body className={`${inter.variable} h-screen antialiased`}>
        <SidebarProvider>
          <DashboardSidebar variant="inset" />
          <SidebarInset>{children}</SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  );
};

export default AdminLayout;
