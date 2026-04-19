import { ObjectId } from "mongodb";
import z from "zod";

// --- Schemas ------------------------------------------------------
const CreateCategorySchema = z.object({
  name: z.string().min(3, "Category name must be at least 3 characters long"),
  thumbnail: z.url("Invalid thumbnail URL"),
});

const CategorySchema = CreateCategorySchema.extend({
  _id: z.instanceof(ObjectId).transform((id) => id.toString()),
  createdAt: z.date().default(() => new Date()),
  updateAt: z.date().default(() => new Date()),
});

// --- Types ------------------------------------------------------
export type CreateCategoryInput = z.infer<typeof CreateCategorySchema>;
export type Category = z.infer<typeof CategorySchema>;
