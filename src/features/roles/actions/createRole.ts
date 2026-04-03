import { auth } from "@/lib/auth"
import { getDb } from "@/lib/mongo"
import { headers } from "next/headers"

export async function createRole(formData: FormData) {
    const name = formData.get('name') as string

    if (!name) {
        throw new Error('Name is required')
    }

    // Check if admin
    const session = await auth.api.getSession({
        headers: await headers()
    })
    if (session?.user.role !== 'admin') {
        throw new Error('Unauthorized')
    }
    const db = await getDb()
    const role = await db.collection('role').insertOne({ name })
    return role
}