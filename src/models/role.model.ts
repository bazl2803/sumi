import { ObjectId } from "mongodb";
import { z } from "zod";
import { BetterAuthUserSchema } from "./user.model";

// --- Schemas --------------------------------------------------------------
export const CreateRoleSchema = z.object({
  name: z.string().min(1, "Role name is required"),
});

export const RoleSchema = CreateRoleSchema.extend({
  _id: z.instanceof(ObjectId).transform((id) => id.toString()),
  permissions: z.array(z.string()).optional(),
  createdAt: z.date().default(() => new Date()),
  updatedAt: z.date().default(() => new Date()),
});

export const RoleWithAssignedUsersSchema = RoleSchema.extend({
  users: z.array(BetterAuthUserSchema),
});

// --- Types ------------------------------------------------------------------
export type CreateRoleInput = z.infer<typeof CreateRoleSchema>;
export type Role = z.infer<typeof RoleSchema>;
export type RoleWithAssignedUsers = z.infer<typeof RoleWithAssignedUsersSchema>;
