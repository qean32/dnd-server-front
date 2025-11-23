import z from "zod";
import { name } from "./types-zod";

export const addSessionSchema = z.object({
    name: name
});

export type addSessionFormDto = {
    name: string
    path: string
}