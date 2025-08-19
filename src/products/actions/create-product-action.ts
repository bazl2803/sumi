"use server";
import prisma from "@/lib/prisma";
import { CreateProductValidator } from "../validators/create-product-validator";
import { toast } from "sonner";

export async function CreateProductAction(formData: FormData) {
  // Convert FormData to a regular object
  const formEntries = Object.fromEntries(formData.entries());

  // Validate required fields
  const isValid = CreateProductValidator.safeParse(formEntries);

  // Check if validation was successful
  if (!isValid.success) {
    return {
      success: false,
      errors: isValid.error.format(),
    };
  } else {
    // Create the product in the database
    await prisma.product
      .create({
        data: {
          name: formEntries.name as string,
          description: formEntries.description as string,
          sku: formEntries.sku as string,
          stock: Number(formEntries.stock),
          price: Number(formEntries.price),
          measureUnit: formEntries.measureUnit as string,
          categoryId: formEntries.categoryId as string,
          brandId: formEntries.brandId as string, // Add this line
          meta: JSON.parse(formEntries.meta as string), // Adjusted to parse the string into an object
        },
      })
      .then(() => toast.success("Producto creado correctamente"))
      .catch(() => toast.error("Error al crear el producto"));
  }
}
