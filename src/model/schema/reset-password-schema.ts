import z from "zod";
import { email } from "./types-zod";

export const resetPasswordSchema = z.object({
    email: email
});

export type resetPasswordFormDto = {
    email: string
}