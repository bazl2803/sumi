import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { nextCookies } from "better-auth/next-js";
import { getDb } from "../mongo";

const db = await getDb();

export const auth = betterAuth({
  baseURL: process.env.BETTER_AUTH_URL!,
  database: mongodbAdapter(db),
  plugins: [nextCookies()],
  user: {
    additionalFields: {
      roleId: { type: "string", defaultValue: "user" },
    },
  },
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    },
    microsoft: {
      clientId: process.env.MICROSOFT_CLIENT_ID!,
      clientSecret: process.env.MICROSOFT_CLIENT_SECRET!,
      tenantId: process.env.MICROSOFT_TENANT_ID!,
    },
  },
  trustedOrigins: ["http://localhost:3000", "https://sumi-seven.vercel.app"],
});
