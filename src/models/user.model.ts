import z from "zod";
import type { User } from "better-auth";

// --- Schemas ----------------------------------------------------------------
export const CreateUserSchema = z
  .object({
    name: z
      .string()
      .min(2, "Name must be at least 2 characters")
      .max(50, "Name must be under 50 characters")
      .regex(/^[a-zA-Z\s'-]+$/, "Name contains invalid characters"),

    email: z.email("Please enter a valid email address").toLowerCase(),

    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .max(72, "Password must be under 72 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number")
      .regex(
        /[^a-zA-Z0-9]/,
        "Password must contain at least one special character",
      ),

    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const BetterAuthUserSchema = z.object({
  id: z.string(),
  email: z.email(),
  emailVerified: z.boolean(),
  name: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  image: z.url().nullable().optional(),
}) satisfies z.ZodType<User>;

export const LoginUserSchema = z.object({
  email: z.email("Please enter a valid email address").toLowerCase(),
  password: z.string().min(1, "Password is required"),
});

// --- Types ------------------------------------------------------------------
export type CreateUserInput = z.infer<typeof CreateUserSchema>;
export type LoginUserInput = z.infer<typeof LoginUserSchema>;
