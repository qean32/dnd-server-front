import z from "zod";
import { confirmPassword, password } from "./types-zod";

export const changePasswordSchema = z.object({
    password: password,
    confirmPassword: password
})
    .superRefine(confirmPassword);

export type changePasswordFormDto = {
    password: string
    confirmPassword: string
}