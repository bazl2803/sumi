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
import { useFieldArray, useForm } from "react-hook-form";
import z from "zod";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { CreateProductValidator } from "../validators/create-product-validator";
import { CreateProductAction } from "../actions/create-product-action";

const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const ProductForm = () => {
  const form = useForm<z.infer<typeof CreateProductValidator>>({
    resolver: zodResolver(CreateProductValidator),
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
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "variants",
  });

  async function onSubmit(
    values: /*z.infer<typeof CreateProductValidator>*/ any,
  ) {
    await CreateProductAction(values);
  }

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-12 bg-white"
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
            name="description"
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
            <h2 className="text-lg font-semibold">Inventario</h2>
            <p className="text-muted-foreground text-sm">
              Completa la información del inventario del producto.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <FormField
              control={form.control}
              name="sku"
              render={() => (
                <FormItem>
                  <FormLabel>Código</FormLabel>
                  <FormControl>
                    <Input />
                  </FormControl>
                  <FormDescription>Código único del producto</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="stock"
              render={() => (
                <FormItem>
                  <FormLabel>Existencia</FormLabel>
                  <FormControl>
                    <Input type="number" min={0} />
                  </FormControl>
                  <FormDescription>
                    Cantidad de productos en existencia
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </section>

        <section className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold">Galería</h2>
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
              <FormItem className="grow">
                <FormLabel>Categoría</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue />
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

        <section className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold">Variantes</h2>
            <p className="text-muted-foreground text-sm">
              Añada variaciones del producto.
            </p>
          </div>

          <div className="justify-items-top grid grid-cols-2 items-start gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Variante</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormDescription>Nombre de la variante</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Valores</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormDescription>
                    Todos los valores que puede tomar la variante (Serados por
                    comas)
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </section>

        <Button>Guardar</Button>
      </form>
    </Form>
  );
};
