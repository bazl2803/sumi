'use server'
import 'server-only';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { convertZodErrors } from "@/utils";
import { signUpSchema } from '../_schemas/signup.schema';
import { SignUpInput, SignUpState } from '../_types/signup.types';

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