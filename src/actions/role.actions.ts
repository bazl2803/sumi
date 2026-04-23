"use server";
import "server-only";
import {
  CreateRoleSchema,
  Role,
  RoleSchema,
  RoleWithAssignedUsers,
  RoleWithAssignedUsersSchema,
} from "@/models/role.model";
import { getDb } from "@/lib/mongo";
import { ObjectId } from "mongodb";
import z from "zod";

const db = await getDb();
const roleCollection = db.collection("role");

interface RoleActionState {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
  data?: Role[] | RoleWithAssignedUsers[] | Role | null;
}

export const getRolesAction = async (): Promise<RoleActionState> => {
  try {
    const roles = await roleCollection.find().toArray();
    const serializedRoles = z.array(RoleSchema).parse(roles);

    return {
      success: true,
      message: "Roles fetched successfully",
      data: serializedRoles,
    };
  } catch (error) {
    console.error("Error fetching roles:", error);
    return {
      success: false,
      message: "Error fetching roles",
      data: null,
      errors: {
        _form: ["Error fetching roles"],
      },
    };
  }
};

export const getRolesWithAssignedUsersAction = async () => {
  try {
    const pipeline = [
      {
        $lookup: {
          from: "user",
          localField: "_id",
          foreignField: "roleId",
          as: "users",
        },
      },
      {
        $project: {
          _id: 1,
          name: 1,
          users: 1,
          permissions: 1,
          createdAt: 1,
          updatedAt: 1,
        },
      },
    ];

    // Get roles with assigned users
    const roles = await roleCollection.aggregate(pipeline).toArray();

    // Serialize the roles to ensure they are JSON serializable with Zod
    const serializedRoles: RoleWithAssignedUsers[] = z
      .array(RoleWithAssignedUsersSchema)
      .parse(roles);

    return {
      success: true,
      message: "Roles fetched successfully",
      data: serializedRoles,
    };
  } catch (error) {
    console.error("Error fetching roles:", error);
    return {
      success: false,
      message: "Error fetching roles",
      data: null,
      errors: {
        _form: ["Error fetching roles"],
      },
    };
  }
};

export const getRoleByIdAction = async (id: string): Promise<Role | null> => {
  try {
    const role = await roleCollection.findOne({ _id: new ObjectId(id) });

    if (!role) {
      return null;
    }

    return RoleSchema.parse(role);
  } catch (error) {
    console.error("Error fetching role:", error);
    return null;
  }
};

export const createRoleAction = async (
  formData: FormData,
): Promise<RoleActionState> => {
  try {
    const data = Object.fromEntries(formData);
    const result = CreateRoleSchema.safeParse(data);

    if (!result.success) {
      return {
        success: false,
        message: "Please correct the errors and try again.",
        errors: result.error.flatten().fieldErrors,
      };
    }

    const roleToInsert = {
      ...result.data,
      createdAt: new Date(),
      updatedAt: new Date(),
      permissions: [],
    };

    const insertResult = await roleCollection.insertOne(roleToInsert as any);
    const newRole = {
      ...roleToInsert,
      _id: insertResult.insertedId.toString(),
    };

    return {
      data: newRole as Role,
      success: true,
      message: "Sucessfully added role",
    };
  } catch (error) {
    console.error("Error creating role:", error);
    return {
      success: false,
      message: "",
      errors: {
        _form: ["Error creating role"],
      },
    };
  }
};

export const updateRolePermissionsAction = async (
  roleId: string,
  permissions: string[],
) => {
  try {
    await roleCollection.updateOne(
      { _id: new ObjectId(roleId) },
      { $set: { permissions } },
    );

    return {
      success: true,
      message: "Role permissions updated successfully",
    };
  } catch (error) {
    console.error("Error updating role permissions:", error);
    return {
      success: false,
      message: "Error updating role permissions",
    };
  }
};
