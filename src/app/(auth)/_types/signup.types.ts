import z from "zod";
import { signUpSchema } from "../_schemas/signup.schema";

export type SignUpInput = z.infer<typeof signUpSchema>;

export type SignUpState = {
    success?: boolean;
    message?: string;
    errors?: Record<string, string>;
    data?: SignUpInput | null;
};