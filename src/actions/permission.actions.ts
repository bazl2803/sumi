"use server";

import { getDb } from "@/lib/mongo";
import { Permission } from "@/models/permission.model";

const db = await getDb();
const permissionsCollection = db.collection<Permission>("permission");

export const getAllPermissionsAction = async (): Promise<Permission[]> => {
  const permissions = await permissionsCollection.find().toArray();

  return permissions;
};

export const getPermissionByIdAction = async (id: string) => {
  try {
    const permission = await permissionsCollection.findOne({ _id: id });

    return permission as unknown as Permission;
  } catch (error) {
    console.error("Error fetching permission:", error);
    return null;
  }
};
