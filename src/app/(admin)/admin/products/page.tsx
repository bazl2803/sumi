<<<<<<< HEAD:src/app/(backoffice)/admin/products/page.tsx
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
<<<<<<< HEAD:src/app/(admin)/admin/products/page.tsx
=======
import { Switch } from "@/components/ui/switch";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { LucideBox, LucideMoreVertical, LucidePlus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
>>>>>>> 933cdecc5f9c777f34e372997bbadd58839611f4:src/app/(backoffice)/admin/products/page.tsx
import { ProductsTable } from "./components/products-table";
import { NewProductDialog } from "./components/newproduct-dialog";
import { Button } from "@/components/ui/button";
import {
  LucideArrowUpDown,
  LucideCloudDownload,
  LucideFilter,
} from "lucide-react";
=======
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { LucidePlus } from "lucide-react";
import { ProductsTable } from "./components/products-table";
import Link from "next/link";
>>>>>>> 4a41c4cdfd8b38c09f5fa98acd87daa476bc5cb6:src/app/(admin)/admin/products/page.tsx

const ProductPage = () => (
  <div className="flex flex-col gap-2">
    <header className="flex h-14 w-full items-center justify-between gap-1 border-b px-4 lg:gap-2 lg:px-6">
      <div className="flex flex-row items-center">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <h1 className="text-base font-medium">Productos</h1>
      </div>
<<<<<<< HEAD:src/app/(admin)/admin/products/page.tsx
      <div className="flex flex-nowrap gap-1">
        <Button variant="outline">
          <LucideCloudDownload /> Exportar
        </Button>
        <NewProductDialog />
      </div>
=======
      <Link href="/admin/products/new">
        <Button>
          <LucidePlus />
          Nuevo Producto
        </Button>
      </Link>
>>>>>>> 933cdecc5f9c777f34e372997bbadd58839611f4:src/app/(backoffice)/admin/products/page.tsx
    </header>

    <div className="flex flex-col gap-2 px-4 lg:gap-2 lg:px-6">
      <div className="flex w-full items-center gap-2">
        <form className="w-80">
          <Input
            placeholder="Buscar producto"
            className="w-full lg:max-w-xs"
            type="search"
          />
        </form>
        <Separator orientation="vertical" className="h-8" />
        <Button variant={"outline"}>
          <LucideFilter /> Filtrar
        </Button>
        <Button variant={"outline"}>
          <LucideArrowUpDown /> Ordenar
        </Button>
      </div>
      <ProductsTable />
    </div>
  </div>
);

export default ProductPage;
