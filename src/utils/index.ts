import z from "zod";

export const convertZodErrors = (error: z.ZodError) => {
    return error.issues.reduce((acc, issue) => {
        const path = issue.path.join(".");
        acc[path] = issue.message;
        return acc;
    }, {} as Record<string, string>);
}