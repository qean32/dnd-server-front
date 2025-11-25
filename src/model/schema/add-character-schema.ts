import z from "zod";

export const addCharacterSchema = z.object({
    link: z
        .string()
        .regex(
            /^[A-Za-z0-9]+$/,
            'Используйте персонажей с сайта aternia.games!'
        )
});

export type addCharacterDto = {
    link: string
}