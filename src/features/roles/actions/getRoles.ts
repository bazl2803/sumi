import { getDb } from "@/lib/mongo"
import { RoleSchema } from "../types/role"
import z from "zod"

export async function getRoles() {
    const pipeline = [
        {
            $lookup: {
                from: 'user',
                localField: '_id',
                foreignField: 'roleId',
                as: 'users'
            },
            $project: {
                
            }
        }
    ]

    const db = await getDb()
    const roles = await db.collection('role').aggregate(pipeline).toArray()
    return z.array(RoleSchema).parse(roles)
}