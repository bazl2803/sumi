import { CategoriesTable } from "@/categories/components/categories-table";
import { CategoryForm } from "@/categories/components/category-form";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { LucideFilter, LucideArrowUpDown, LucidePlus } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Administrar - Categorías",
  description: "Página de administración de categorías",
};

export default function AdminCategoriesPage() {
  return (
    <main>
      <header className="flex h-14 w-full items-center justify-between gap-1 px-4 lg:gap-2 lg:px-6">
        <div className="flex flex-row items-center">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mx-2 data-[orientation=vertical]:h-4"
          />
          <h1 className="text-base font-medium">Categorías</h1>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <LucidePlus />
              Nueva Categoría
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Nueva Categoría</DialogTitle>
            </DialogHeader>
            <CategoryForm />
          </DialogContent>
        </Dialog>
      </header>

      <div className="flex flex-col gap-2 px-4 lg:gap-2 lg:px-6">
        <div className="flex w-full items-center justify-between gap-2">
          <form className="w-80">
            <Input
              placeholder="Buscar categorías"
              className="w-full lg:max-w-xs"
              type="search"
            />
          </form>
          <div className="flex flex-row items-center gap-2">
            <Button variant={"outline"}>
              <LucideFilter /> Filtrar
            </Button>
            <Button variant={"outline"}>
              <LucideArrowUpDown /> Ordenar
            </Button>
          </div>
        </div>

        <CategoriesTable />
      </div>
    </main>
  );
}
