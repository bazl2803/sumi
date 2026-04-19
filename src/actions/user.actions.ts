"use server";
import "server-only";
import {
  CreateUserInput,
  CreateUserSchema,
  LoginUserSchema,
} from "@/models/user.model";
import { convertZodErrors } from "@/utils";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

// --- Types ------------------------------------------------------
export type UserActionState = {
  success: boolean;
  message: string;
  errors?: Record<string, string>;
  data?: CreateUserInput | null;
};

// --- Actions -----------------------------------------------------
export const createUserWithEmailAction = async (
  _prevState: UserActionState,
  formData: FormData,
) => {
  try {
    // Validate user data
    const user = CreateUserSchema.safeParse(formData);

    // Return errors if validation fails
    if (!user.success) {
      return {
        success: false,
        message: "Please correct the errors and try again.",
        errors: convertZodErrors(user.error),
      };
    }

    // Create user with email
    await auth.api.signUpEmail({
      body: {
        name: user.data.name,
        email: user.data.email,
        password: user.data.password,
      },
      headers: await headers(),
    });

    // Return success message
    return {
      success: true,
      message: "User created successfully.",
    };
  } catch (error) {
    // Return error message
    return {
      success: false,
      message: "Failed to create user.",
    };
  }
};

export const LoginWithEmailAction = async (
  _prevState: UserActionState,
  formData: FormData,
) => {
  const user = LoginUserSchema.safeParse(formData);

  if (!user.success) {
    return {
      success: false,
      message: "Please correct the errors and try again.",
      errors: convertZodErrors(user.error),
    };
  }

  try {
    await auth.api.signInEmail({
      body: {
        email: user.data.email,
        password: user.data.password,
      },
      headers: await headers(),
    });

    return {
      success: true,
      message: "User logged in successfully.",
    };
  } catch (error) {
    return {
      success: false,
      message: "Failed to login.",
    };
  }
};

export const LoginSocialAction = async (provider: "google" | "microsoft") => {
  let url: string | null = null;

  try {
    const result = await auth.api.signInSocial({
      body: {
        provider: provider,
        callbackURL: "/",
      },
      headers: await headers(),
    });

    url = result.url!;
  } catch (error) {
    return {
      success: false,
      message: "Failed to login.",
    };
  }

  if (!url) {
    return {
      success: false,
      message: `No redirect URL returned for provider: ${provider}`,
    };
  }

  redirect(url);
};

export const logoutAction = async () => {
  try {
    await auth.api.signOut({
      headers: await headers(),
    });

    return {
      success: true,
      message: "User logged out successfully.",
    };
  } catch (error) {
    return {
      success: false,
      message: "Failed to logout.",
    };
  }
};
