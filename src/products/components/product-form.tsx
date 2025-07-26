"use client";
import { Button } from "@/components/ui/button";

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
import prisma from "@/lib/prisma";
import { useForm } from "react-hook-form";
import z from "zod";
import { createProduct } from "../actions/create-product";

const formSchema = z.object({
  thumbnail: z.string(),
  name: z.string({ message: "Nombre es requerido" }),
  description: z.string().optional(),
  sku: z.string({ message: "SKU es requerido" }),
  stock: z.number().min(0, { message: "El stock debe ser mayor a 0" }),
  price: z.number().min(0, { message: "El precio debe ser mayor a 0" }),
});

export const ProductForm = () => {
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

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await createProduct(values);
  }

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-4 bg-white"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="sku"
          render={({ field }) => (
            <FormItem>
              <FormLabel>SKU</FormLabel>
              <FormControl>
                <Input placeholder="000000" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="thumbnail"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Galería</FormLabel>
              <FormControl>
                <Input
                  accept="image/*"
                  type="file"
                  placeholder="000000"
                  multiple
                  {...field}
                />
              </FormControl>
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
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Descripción</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>Breve resumén del producto</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button>Guardar</Button>
      </form>
    </Form>
  );
};
