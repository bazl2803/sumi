'use server'

import { signUpSchema, SignUpSchemaFormData } from "@/features/auth/schemas/signup.schema";
import { FormState } from "@/features/core/types";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { z } from "zod";

// ─── Transform ──────────────────────────────────────────────────────────────
const signUpServerSchema = signUpSchema.transform(
    ({ confirmPassword: _, ...rest }) => rest
);

// ─── Action ───────────────────────────────────────────────────────────────────
export async function signUpEmailAction(
    _prevState: FormState<SignUpSchemaFormData>,
    formData: FormData
): Promise<FormState<SignUpSchemaFormData>> {
    const parsed = signUpServerSchema.safeParse(formData)

    if (!parsed.success) {
        const { errors } = z.treeifyError(parsed.error)

        return {
            success: false,
            message: "Please fix the errors below",
            fields: {
                name: formData.get("name") as string,
                email: formData.get("email") as string,
                password: formData.get("password") as string,
                confirmPassword: formData.get("confirmPassword") as string,
            },
            errors: errors as FormState<SignUpSchemaFormData>["errors"]
        }
    }

    const { name, email, password } = parsed.data;

    try {
        await auth.api.signUpEmail({
            body: {
                name,
                email,
                password,
            },
            headers: await headers()
        })
    } catch (error) {
        const message =
            error instanceof Error ? error.message : "Something went wrong. Try again.";

        return {
            success: false,
            message,
        }
    }

    return {
        success: true,
        message: "User created successfully",
    }
}
