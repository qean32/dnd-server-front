import z from "zod";

export const addObjectToSessionSchema = z.object({
    name: z
        .string()
        .max(20, { message: 'Максимальная длина - 20' })
        .min(4, { message: 'Минимальная длина - 8' })
    ,
    path: z.any(),
    // discription: z.string().max(255, { message: 'Мексимальная длина 255 символа' }),
});

export type addObjectToSessionFormDto = {
    name: string
    path: any
}