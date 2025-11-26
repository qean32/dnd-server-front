import z from "zod";

export const addMapToSessionSchema = z.object({
    name: z
        .string()
        .max(20, { message: 'Максимальная длина - 20' })
        .min(4, { message: 'Минимальная длина - 8' })
    ,
    path: z.any(),
});

export type addMapToSessionFormDto = {
    name: string
    path: any
}