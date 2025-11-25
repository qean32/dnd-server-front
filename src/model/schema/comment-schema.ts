import z from "zod";

export const commentSchema = z.object({
    text: z
        .string()
        .max(20, { message: 'Максимальная длина - 255 символа' })
});

export type commentFormDto = {
    text: string
}