"use server"

import { signUpSchema } from "@/app/(auth)/_schemas/signup.schema";
import { SignUpInput } from "@/app/(auth)/_types/signup.types";
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
            errors: parsed.error.flatten().fieldErrors as FieldErrors<SignUpInput>
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