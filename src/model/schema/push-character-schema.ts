import z from "zod";

export const pushCharacterSchema = z.object({
    path: z
        .string()
        .regex(
            /^[A-Za-z0-9]+$/,
            'Используйте персонажей с сайта aternia.games!'
        )
});

export type pushCharacterDto = {
    path: string
}