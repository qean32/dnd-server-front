import z from "zod";

export const addCharacterSchema = z.object({
    link: z
        .regex(
            /^[A-Za-z0-9]+$/,
            'Пароль должен состоять из латиница и цифр'
        )
});

export type addCharacterDto = {
    link: string
}