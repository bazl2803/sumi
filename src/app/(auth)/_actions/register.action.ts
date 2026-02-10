'use server'

import 'server-only'
import { auth } from "@/lib/auth"
import { z } from "zod"

const registerSchema = z.object({
    email: z.email(),
    password: z.string().min(6),
    name: z.string().min(2).max(100)
})

export const signUp = async (formdata: FormData) => {
    const data = Object.fromEntries(formdata.entries())
    const parsed = registerSchema.safeParse(data)

    if (!parsed.success) {
        return { errors: parsed.error.issues }
    }

    const res = await auth.api.signUpEmail({
        body: {
            email: parsed.data.email,
            password: parsed.data.password,
            name: parsed.data.name
        }
    })

    if (!res) {
        return { error: "Failed to sign up" }
    }

    return { success: true }
}