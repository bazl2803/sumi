import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ProductForm } from "@/products/components/product-form";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { LucidePlus } from "lucide-react";

export const NewProductDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <LucidePlus />
          Agregar producto
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Nuevo Producto</DialogTitle>
        </DialogHeader>
        <ProductForm />
      </DialogContent>
    </Dialog>
  );
};
