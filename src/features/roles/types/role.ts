import { ObjectId } from "mongodb";
import { z } from "zod";

export const RoleSchema = z.object({
    _id: z.instanceof(ObjectId).transform((id) => id.toString()),
    name: z.string(),
    permissions: z.array(z.string()).optional(),
    createdAt: z.date().default(() => new Date()),
    updatedAt: z.date().default(() => new Date()),
})

export type Role = z.infer<typeof RoleSchema>