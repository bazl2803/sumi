import z from "zod";

const MAX_FILE_SIZE = 2 * 1024 * 1024;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const CreateProductValidator = z.object({
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
