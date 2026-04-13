"use client";
import {
  Logo,
  Sidebar,
  SidebarFooter,
  SidebarHeader,
  SidebarItem,
  SidebarSection,
  SidebarTrail,
} from "@/components";
import {
  IconAddressBook,
  IconBox,
  IconFileText,
  IconKey,
  IconSettings,
  IconStack,
  IconTruck,
  IconUser,
} from "@tabler/icons-react";

// --- JSX --------------------------------------------------------------------
export function DashboardSidebar({ className }: { className?: string }) {
  return (
    <Sidebar className={className}>
      <SidebarTrail>
        <SidebarHeader>
          <Logo />
        </SidebarHeader>
        <SidebarSection title="Operaciones">
          <SidebarItem
            icon={IconBox}
            href="/manage/products"
            label="Productos"
          />
          <SidebarItem
            icon={IconStack}
            href="/manage/inventory"
            label="Inventario"
          />
          <SidebarItem
            icon={IconFileText}
            href="/manage/invoices"
            label="Facturas"
          />
          <SidebarItem icon={IconTruck} href="/manage/orders" label="Pedidos" />
        </SidebarSection>
        <SidebarSection title="Administración" grow>
          <SidebarItem
            icon={IconKey}
            href="/manage/credentials"
            label="Credenciales"
          />
          <SidebarItem
            icon={IconUser}
            href="/manage/customers"
            label="Clientes"
          />
          <SidebarItem
            icon={IconAddressBook}
            href="/manage/contacts"
            label="Contactos"
          />
        </SidebarSection>
        <SidebarFooter>
          <SidebarItem
            icon={IconSettings}
            href="/manage/settings"
            label="Settings"
          />
        </SidebarFooter>
      </SidebarTrail>
    </Sidebar>
  );
}
