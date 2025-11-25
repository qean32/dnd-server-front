import z from "zod";

export const createPostSchema = z.object({
    department: z
        .string(),
    text: z
        .string()
        .min(10, { message: 'Минимальная длинна 10' }),
    discription: z
        .string()
        .min(10, { message: 'Минимальная длинна 10' }),
    tags: z
        .string(),
    title: z
        .string()
        .min(10, { message: 'Минимальная длинна 10' }),
    files: z
        .any()
});

export type createPostFormDto = {
    department: string
    text: string
    discription: string
    tags: string
    files: any
    title: string
}