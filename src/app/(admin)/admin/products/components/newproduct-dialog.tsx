import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ProductForm } from "@/products/components/product-form";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { LucidePlus } from "lucide-react";

export const NewProductDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">
          <LucidePlus />
          Agregar producto
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[380px]">
        <DialogHeader>
          <DialogTitle>Nuevo Producto</DialogTitle>
        </DialogHeader>
        <ProductForm />
      </DialogContent>
    </Dialog>
  );
};
