import z from "zod";
import { name } from "./types-zod";

export const editProfileSchema = z.object({
    name: name
});

export type editProfileFormDto = {
    name: string
    ava: string
}