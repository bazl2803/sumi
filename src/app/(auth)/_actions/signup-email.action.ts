'use server'
import 'server-only';
import { auth } from './../../../lib/auth/index';
import { convertZodErrors } from "@/utils";
import { headers } from 'next/headers';
import z from "zod";

// --- Schemas -----------------------------------------------------

export const signUpSchema = z
    .object({
        name: z
            .string()
            .min(2, "Name must be at least 2 characters")
            .max(50, "Name must be under 50 characters")
            .regex(/^[a-zA-Z\s'-]+$/, "Name contains invalid characters"),

        email: z
            .email("Please enter a valid email address")
            .toLowerCase(),

        password: z
            .string()
            .min(8, "Password must be at least 8 characters")
            .max(72, "Password must be under 72 characters")
            .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
            .regex(/[a-z]/, "Password must contain at least one lowercase letter")
            .regex(/[0-9]/, "Password must contain at least one number")
            .regex(
                /[^a-zA-Z0-9]/,
                "Password must contain at least one special character"
            ),

        confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"],
    });

// --- Types -------------------------------------------------------

export type SignUpInput = z.infer<typeof signUpSchema>;

export type SignUpState = {
    success?: boolean;
    message?: string;
    errors?: Record<string, string>;
    data?: SignUpInput | null;
};

// --- Action -----------------------------------------------------
export async function signUpEmailAction(
    _prevState: SignUpState,
    formData: FormData
): Promise<SignUpState> {
    const input = Object.fromEntries(formData.entries()) as SignUpInput;
    const validation = signUpSchema.safeParse(input);

    if (!validation.success) {
        return {
            success: false,
            message: "Please correct the errors and try again.",
            errors: convertZodErrors(validation.error),
        }
    }

    try {
        await auth.api.signUpEmail({
            body: {
                name: input.name,
                email: input.email,
                password: input.password,
            },
            headers: await headers()
        })

        return { success: true }
    } catch (error) {
        if (error instanceof Error) {
            return {
                success: false,
                message: error.message,
            }
        }
    }

    return { success: false }
}