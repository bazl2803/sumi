'use server'

import { auth } from "@/lib/auth";
import { z } from "zod";

// Zod schema for email and password
const signInSchema = z.object({
    email: z.email(),
    password: z.string().min(6),
});

export async function signInWithEmail(formData: FormData) {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    const result = signInSchema.safeParse({ email, password });

    if (!result.success) {
        return { error: result.error.message };
    }

    await auth.api.signInEmail({
        body: {
            email,
            password,
        }
    })
}