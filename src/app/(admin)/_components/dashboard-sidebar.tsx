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
  LucideBookKey,
  LucideChartNoAxesCombined,
  LucideClipboardList,
<<<<<<< HEAD:src/app/(backoffice)/admin/_components/dashboard-sidebar.tsx
  LucideKey,
  LucideLockKeyholeOpen,
  LucidePackage,
  LucideUsers,
=======
  LucideLayoutDashboard,
  LucidePackage,
  LucideTag,
>>>>>>> 4a41c4cdfd8b38c09f5fa98acd87daa476bc5cb6:src/app/(admin)/_components/dashboard-sidebar.tsx
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
<<<<<<< HEAD:src/app/(backoffice)/admin/_components/dashboard-sidebar.tsx
          <SidebarMenuItem title="Dashboard">
            <SidebarMenuButton className="w-fit" asChild>
              <Link className="flex h-auto" href={"/"}>
                <Image
                  className="h-auto w-32"
                  src={"/logo-alt.png"}
                  alt="logo"
                  sizes="200px"
                  width={100}
                  height={100}
                />
              </Link>
=======
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                <Image
                  src={"/logo-alt.svg"}
                  alt="logo"
                  width={100}
                  height={100}
                />
              </a>
>>>>>>> 4a41c4cdfd8b38c09f5fa98acd87daa476bc5cb6:src/app/(admin)/_components/dashboard-sidebar.tsx
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
<<<<<<< HEAD:src/app/(backoffice)/admin/_components/dashboard-sidebar.tsx
          <SidebarGroupLabel>Gestión</SidebarGroupLabel>
=======
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem title="Dashboard">
                <SidebarMenuButton asChild>
                  <Link href="/admin">
                    <LucideLayoutDashboard />
                    <span>Inicio</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Productos</SidebarGroupLabel>
>>>>>>> 4a41c4cdfd8b38c09f5fa98acd87daa476bc5cb6:src/app/(admin)/_components/dashboard-sidebar.tsx
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem title="Products">
                <SidebarMenuButton asChild>
                  <Link href="/admin/products">
                    <LucidePackage />
                    <span>Catálogo</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem title="Categorías">
                <SidebarMenuButton asChild>
                  <Link href="/admin/categories">
                    <LucideTag />
                    <span>Categorías</span>
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
        <SidebarGroup>
          <SidebarGroupLabel>Usuarios</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem title="Products">
                <SidebarMenuButton asChild>
                  <Link href="/admin/products">
                    <LucideUsers />
                    <span>Clientes</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem title="Products">
                <SidebarMenuButton asChild>
                  <Link href="/admin/products">
                    <LucideKey />
                    <span>Permisos</span>
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
