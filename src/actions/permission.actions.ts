"use server";

import { getDb } from "@/lib/mongo";
import { ObjectId } from "mongodb";
import { Permission, PermissionSchema } from "@/models/permission.model";
import z from "zod";

const db = await getDb();
const permissionsCollection = db.collection<Permission>("permission");

export const getAllPermissionsAction = async (): Promise<Permission[]> => {
  const permissions = await permissionsCollection.find().toArray();

  const serializedPermissions: Permission[] = z
    .array(PermissionSchema)
    .parse(permissions);

  return serializedPermissions;
};

export const getPermissionByIdAction = async (id: string) => {
  try {
    const permission = await permissionsCollection.findOne({ _id: new ObjectId(id) as any });

    if (!permission) {
      return null;
    }

    return PermissionSchema.parse(permission);
  } catch (error) {
    console.error("Error fetching permission:", error);
    return null;
  }
};
