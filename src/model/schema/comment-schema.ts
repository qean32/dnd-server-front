import z from "zod";

export const commentSchema = z.object({
    text: z
        .string()
        .max(255, { message: 'Максимальная длина - 255 символа' }),
    files: z
        .any()
});

export type commentFormDto = {
    text: string
    files: any
}