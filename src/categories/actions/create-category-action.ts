"use server";
import prisma from "@/lib/prisma";
import { CreateCategoryValidator } from "../validators/create-category-validator";
import { toast } from "sonner";

export const CreateCategory = async (formState: FormData) => {
  1;
  const formEntries = Object.fromEntries(formState.entries());
  const isValid = CreateCategoryValidator.safeParse(formEntries);

  if (!isValid.success) {
    return {
      success: false,
      errors: isValid.error.format(),
    };
  } else {
    await prisma.category
      .create({
        data: {
          name: formEntries.name as string,
          thumbnail: formEntries.thumbnail as string,
        },
      })
      .then(() => toast.success("Categoría creada correctamente"))
      .catch(() => toast.error("Error al crear la categoría"));
  }
};
