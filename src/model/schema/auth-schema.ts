import z from "zod";
import { password } from "./types-zod";

export const authSchema = z.object({
    nameOrEmail: z
        .string(),
    password: password
});

export type authFormDto = {
    nameOrEmail: string
    password: string
}