"use server"

import z from "zod"
import { SignUpInput, signUpSchema } from "../schemas"
import { auth } from "@/lib/auth"

type FieldErrors<T> = {
    [K in keyof T]?: string[]
}

export type SignUpState = {
    success: boolean;
    message: string;
    errors?: FieldErrors<SignUpInput> | null;
    data?: { userId: string } | null;
};

export async function signUpEmailAction(_prevState: SignUpState, formData: FormData): Promise<SignUpState> {
    const raw = {
        name: formData.get("name"),
        email: formData.get("email"),
        password: formData.get("password"),
        confirmPassword: formData.get("confirmPassword"),
    }

    const parsed = signUpSchema.safeParse(raw)

    if (!parsed.success) {
        return {
            success: false,
            message: "Something went wrong",
            errors: parsed
        }


    }

    await auth.api.signUpEmail({
        body: {
            name: parsed.data.name,
            email: parsed.data.email,
            password: parsed.data.password,
        }
    })

    return {
        success: true,
        message: "User created successfully"
    }
}