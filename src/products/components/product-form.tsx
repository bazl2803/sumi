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
import { useForm } from "react-hook-form";
import z from "zod";
import { createProduct } from "../actions/create-product";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

/**
 * ProductFormSchema defines the validation schema for the product form.
 */
const MAX_FILE_SIZE = 2 * 1024 * 1024;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

const ProductFormSchema = z.object({
  gallery: z
    .array(z.instanceof(File))
    .min(1, { message: "Debe subir al menos una imagen" })
    .max(5, { message: "Máximo 5 imágenes permitidas" })
    .refine(
      (files) => {
        files.every((file) => file.size <= MAX_FILE_SIZE);
      },
      { message: "Cada imagen debe ser menor a 2MB" },
    )
    .refine(
      (files) => {
        files.every((file) => ACCEPTED_IMAGE_TYPES.includes(file.type));
      },
      { message: "Tipos de archivo permitidos: JPEG, PNG, WEBP" },
    ),
  name: z.string({ message: "Nombre es requerido" }),
  description: z.string().optional(),
  sku: z.string({ message: "SKU es requerido" }),
  stock: z.number().min(0, { message: "El stock debe ser mayor a 0" }),
  measureUnit: z.enum(["unidad", "metro", "yarda"]),
  price: z.number().min(0, { message: "El precio debe ser mayor a 0" }),
  categoryId: z.string({ message: "Categoría es requerida" }),
  brand: z.string().optional(),
  variants: z
    .array(
      z.object({
        name: z.array(
          z.object({
            name: z.string({ message: "Nombre de la opción requerido" }),
            value: z.string({ message: "Valor de la opción requerido" }),
          }),
        ),
        price: z.number().min(0, { message: "El precio debe ser mayor a 0" }),
        stock: z.number().min(0, { message: "El stock debe ser mayor a 0" }),
      }),
    )
    .optional(),
  specs: z
    .array(
      z.object({
        name: z.string({ message: "Nombre de la especificación requerido" }),
        value: z.string({ message: "Valor de la especificación requerido" }),
      }),
    )
    .optional(),
  meta: z.object({
    sales: z.number().optional(),
    views: z.number().optional(),
    tags: z.array(z.enum(["HOT", "NEW", "FEATURED", "BEST_SELLER"])).optional(),
  }),
});

export const ProductForm = () => {
  const form = useForm<z.infer<typeof ProductFormSchema>>({
    resolver: zodResolver(ProductFormSchema),
    defaultValues: {
      name: "",
      description: "",
      sku: "",
      stock: 0,
      price: 0,
      measureUnit: "unidad",
      brand: "",
      gallery: [],
    },
  });

  async function onSubmit(values: z.infer<typeof ProductFormSchema>) {
    await createProduct(values);
  }

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-8 bg-white"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <section className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold">Información del Producto</h2>
            <p className="text-muted-foreground text-sm">
              Completa los detalles del producto.
            </p>
          </div>

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
                  <Textarea placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>Breve resumén del producto</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </section>

        <section className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold">Gallería</h2>
            <p className="text-muted-foreground text-sm">
              Agrega imágenes del producto.
            </p>
          </div>

          <FormField
            control={form.control}
            name="gallery"
            render={({ field: { onChange, value, ...field } }) => (
              <FormItem>
                <FormLabel>Imágenes</FormLabel>
                <FormControl>
                  <Input
                    accept={ACCEPTED_IMAGE_TYPES.join(",")}
                    type="file"
                    multiple
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </section>

        <section className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold">Categoría</h2>
            <p className="text-muted-foreground text-sm">
              Selecciona la categoría del producto.
            </p>
          </div>

          <FormField
            control={form.control}
            name="categoryId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Categoría</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Selecciona una categoría" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="electronics">Electrónica</SelectItem>
                    <SelectItem value="clothing">Ropa</SelectItem>
                    <SelectItem value="accessories">Accesorios</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </section>

        <Button>Guardar</Button>
      </form>
    </Form>
  );
};
