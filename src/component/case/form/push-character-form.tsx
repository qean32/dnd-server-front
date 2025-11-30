import React from 'react'
import { Title, TextInput } from '@component/ui'
import { pushCharacterDto, pushCharacterSchema } from '@/model/schema'
import { FormProvider } from 'react-hook-form'
import { useMyForm } from '@/lib/castom-hook'

interface Props {
    children: React.ReactNode
}


export const PushCharaterForm: React.FC<Props> = ({ children }: Props) => {
    const { form, submitHandler } =
        useMyForm<pushCharacterDto>(
            pushCharacterSchema,
            () => { },
            () => { }
        )

    return (
        <FormProvider {...form}>

            <form action="" onSubmit={submitHandler} className='flex flex-col h-full'>
                <Title className='mb-1'>ДОБАВЛЕНИЕ ИГРЫ</Title>
                <p className='pb-6'>используйте персонажей с сайта <a href="">aternia.games</a>!</p>
                <TextInput placeHolder='Ссылка' name='path' />
                <div className="flex flex-1 gap-4 justify-end items-end">
                    {children}
                </div>
            </form>
        </FormProvider>
    )
}
