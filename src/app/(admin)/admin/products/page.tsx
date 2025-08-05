import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ProductsTable } from "./components/products-table";
import { NewProductDialog } from "./components/newproduct-dialog";
import { Button } from "@/components/ui/button";
import {
  LucideArrowUpDown,
  LucideCloudDownload,
  LucideFilter,
  LucideUpload,
} from "lucide-react";

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
      <div className="flex flex-nowrap gap-1">
        <Button variant="outline">
          <LucideCloudDownload /> Exportar
        </Button>
        <NewProductDialog />
      </div>
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
