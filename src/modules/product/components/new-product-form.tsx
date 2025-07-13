"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { LucidePlus } from "lucide-react";
import { useForm } from "react-hook-form";
import z from "zod";

const formSchema = z.object({
  name: z.string({ message: "Nombre es requerido" }),
  description: z.string().optional(),
  sku: z.string({ message: "SKU es requerido" }),
  stock: z.number().min(0, { message: "El stock debe ser mayor a 0" }),
  price: z.number().min(0, { message: "El precio debe ser mayor a 0" }),
});

export const NewProductForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      sku: "",
      stock: 0,
      price: 0,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <LucidePlus />
          Nuevo Producto
        </Button>
      </DialogTrigger>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Nuevo Producto</DialogTitle>
            </DialogHeader>
            <DialogDescription>Crea un nuevo nuevo producto.</DialogDescription>
            <FormField
              control={form.control}
              name="sku"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>SKU</FormLabel>
                  <FormControl>
                    <Input placeholder="000000" {...field} />
                  </FormControl>
                  <FormDescription>
                    Código de barras del producto
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre</FormLabel>
                  <FormControl>
                    <Input placeholder="Nombre del producto" {...field} />
                  </FormControl>
                  <FormDescription>Nombre visible del producto</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormDescription>Nombre visible del producto</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <DialogFooter>
              <Button>Guardar</Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Form>
    </Dialog>
  );
};

/**
 * <Dialog>
              
              <DialogContent>
                
                <NewProductForm /> Here
                
              </DialogContent>
            </Dialog>
 */
