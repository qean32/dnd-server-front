import z from "zod";

export const addEntityToSessionSchema = z.object({
    name: z
        .string()
        .max(20, { message: 'Максимальная длина - 20' })
        .min(4, { message: 'Минимальная длина - 8' })
    ,
    source: z.string(),
    path: z.string(),
    discription: z.string().max(255, { message: 'Максимальная длина 255 символа' }),
    initiative: z.string()
});

export type addEntityToSessionFormDto = {
    name: string
    path: string
    source: string
    discription: string
    initiative: string
}