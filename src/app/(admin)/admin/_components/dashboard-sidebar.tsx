import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import {
  LucideChartNoAxesCombined,
  LucideClipboardList,
  LucidePackage,
} from "lucide-react";
import Link from "next/link";

export function DashboardSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Colecciones</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem title="Products">
                <SidebarMenuButton asChild>
                  <Link href="/admin/products">
                    <LucidePackage />
                    <span>Productos</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem title="Products">
                <SidebarMenuButton asChild>
                  <Link href="/admin/products">
                    <LucideClipboardList />
                    <span>Órdenes</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem title="Products">
                <SidebarMenuButton asChild>
                  <Link href="/admin/products">
                    <LucideChartNoAxesCombined />
                    <span>Ventas</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
