'use server'

import 'server-only'
import { auth } from "@/lib/auth"
import z from "zod"

const loginSchema = z.object({
    email: z.email(),
    password: z.string().min(6)
})

export const LoginPage = async (formData: FormData) => {
    const data = Object.fromEntries(formData.entries())
    const parsed = loginSchema.safeParse(data)

    if (!parsed.success) {
        return { errors: parsed.error.issues }
    }

    const res = await auth.api.signInEmail({
        body: {
            email: parsed.data.email,
            password: parsed.data.password
        }
    })

    if (!res) {
        return { error: "Failed to log in" }
    }

    return { success: true }
}