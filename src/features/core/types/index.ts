export type FormState<T> = {
    success: boolean;
    message: string;
    fields?: Partial<T>;
    errors?: { [K in keyof T]?: string[] }
}