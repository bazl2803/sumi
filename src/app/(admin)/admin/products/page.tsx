"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
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
import { ProductsTable } from "./components/products-table";
import { NewProductDialog } from "./components/newproduct-dialog";

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
      <NewProductDialog />
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
