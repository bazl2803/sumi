import { ObjectId } from "mongodb";
import { z } from "zod";

export const PermissionSchema = z.object({
  _id: z.instanceof(ObjectId).transform((id) => id.toString()),
  name: z.string(),
});

export type Permission = z.infer<typeof PermissionSchema>;
