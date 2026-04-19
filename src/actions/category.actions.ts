"use server";
import { getDb } from "@/lib/mongo";
import { Category } from "@/models/category.model";

// --- Actions -----------------------------------------------------
export const getCategoriesAction = async () => {
  try {
    const db = await getDb();
    const categories = await db.collection("category").find().toArray();

    return categories as unknown as Category[];
  } catch (error) {
    return [];
  }
};
