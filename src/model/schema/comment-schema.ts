import z from "zod";

export const commentSchema = z.object({
});

export type commentFormDto = {
    text: string
    files: string
}