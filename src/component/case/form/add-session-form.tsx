import React from 'react'
import { Title, TextInput, SelectSessionBG } from '@component/ui'
import { addSessionFormDto, addSessionSchema } from '@/model/schema'
import { FormProvider } from 'react-hook-form'
import { useMyForm } from '@/lib/castom-hook'

interface Props {
    children: React.ReactNode
}


export const AddSessionForm: React.FC<Props> = ({ children }: Props) => {
    const { form, submitHandler } =
        useMyForm<addSessionFormDto>(
            addSessionSchema,
            () => { },
            () => { }
        )

    return (
        <FormProvider {...form}>

            <form action="" onSubmit={submitHandler}>
                <Title className='mb-5'>ДОБАВЛЕНИЕ СЕССИИ</Title>
                <TextInput placeHolder='Название сессии' className='w-[360px] mb-5' name='name' />
                <SelectSessionBG />
                <div className="pt-8 flex gap-4 justify-end">
                    {children}
                </div>
            </form>
        </FormProvider>
    )
}
