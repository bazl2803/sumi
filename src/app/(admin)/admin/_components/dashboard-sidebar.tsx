import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarHeader,
} from "@/components/ui/sidebar";
import {
  LucideChartNoAxesCombined,
  LucideClipboardList,
  LucidePackage,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function DashboardSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem title="Dashboard">
            <SidebarMenuButton className="w-fit" asChild>
              <div className="flex h-auto">
                <Image
                  className="h-auto w-32"
                  src={"/logo-alt.png"}
                  alt="logo"
                  sizes="200px"
                  width={100}
                  height={100}
                />
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
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
