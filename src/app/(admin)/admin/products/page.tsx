import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { LucidePlus } from "lucide-react";
import { ProductsTable } from "./components/products-table";
import Link from "next/link";

const ProductPage = () => (
  <div className="flex flex-col gap-2">
    <header className="flex h-14 w-full items-center justify-between gap-1 px-4 lg:gap-2 lg:px-6">
      <div className="flex flex-row items-center">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <h1 className="text-base font-medium">Productos</h1>
      </div>
      <Link href="/admin/products/new">
        <Button>
          <LucidePlus />
          Nuevo Producto
        </Button>
      </Link>
    </header>

    <div className="px-4 lg:gap-2 lg:px-6">
      <form>
        <Input
          placeholder="Buscar producto"
          className="w-full lg:max-w-xs"
          type="search"
        />
      </form>
      <ProductsTable />
    </div>
  </div>
);

export default ProductPage;
