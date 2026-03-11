'use server'
import 'server-only';
import { auth } from "@/lib/auth";
import { z } from "zod";
import { headers } from "next/headers";

// Zod schema for email and password
const signInSchema = z.object({
    email: z.email(),
    password: z.string().min(6),
});

export async function signInWithEmail(_prevState: any, formData: FormData) {
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
        },
        headers: await headers()
    })
}