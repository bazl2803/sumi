import z from "zod";
export const CreateCategoryValidator = z.object({
  thumbnail: z.instanceof(File).refine(
    (file) => {
      file.size <= 2 * 1024 * 1024;
    },
    {
      message: "El tamaño del archivo debe ser menor a 2MB",
    },
  ),
  name: z.string({ message: "Nombre es requerido" }),
});
