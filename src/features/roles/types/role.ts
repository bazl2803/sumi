import { ObjectId } from "mongodb";
import { z } from "zod";

// --- Schemas --------------------------------------------------------------
export const RoleSchema = z.object({
    _id: z.instanceof(ObjectId).transform((id) => id.toString()),
    name: z.string(),
    permissions: z.array(z.string()).optional(),
    createdAt: z.date().default(() => new Date()),
    updatedAt: z.date().default(() => new Date()),
})

export const RoleWithStatsSchema = RoleSchema.extend({
    permissionsCount: z.number().optional(),
    userAssignedCount: z.number().optional(),
})

// --- Types ------------------------------------------------------------------
export type Role = z.infer<typeof RoleSchema>
export type RoleWithStats = z.infer<typeof RoleWithStatsSchema>