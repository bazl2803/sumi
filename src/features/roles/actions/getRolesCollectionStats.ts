"use server";

import { getDb } from "@/lib/mongo";
import { RoleWithStats } from "../types/role";

export async function getRolesCollectionStats(): Promise<RoleWithStats[]> {
    try {
        const database = await getDb();
        const roles = database.collection("role");

        const pipeline = [
            {
                // 1. Join with users collection to find matches
                $lookup: {
                    from: "user",
                    let: { roleId: "$_id" },
                    pipeline: [
                        {
                            $match: {
                                $expr: {
                                    $eq: ["$role", { $toString: "$$roleId" }],
                                },
                            },
                        },
                    ],
                    as: "assignedUsers",
                },
            },
            {
                // 2. Shape the output
                $project: {
                    _id: { $toString: "$_id" },
                    name: 1,
                    // Count the existing permissions array in the role doc
                    permissionsCount: {
                        $cond: {
                            if: { $isArray: "$permissions" },
                            then: { $size: "$permissions" },
                            else: 0
                        }
                    },
                    // Count the results from the $lookup
                    userAssignedCount: { $size: "$assignedUsers" },
                },
            },
        ];

        const results = await roles.aggregate(pipeline).toArray();

        // Cast to our TypeScript interface
        return results as unknown as RoleWithStats[];
    } catch (error) {
        console.error("Database error:", error);
        throw new Error("Failed to fetch roles statistics.");
    }
}