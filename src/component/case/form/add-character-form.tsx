import React from 'react'
import { Title, TextInput } from '@component/ui'
import { toast } from '@/lib/function'
import { addCharacterDto, addCharacterSchema } from '@/model/schema'
import { useAppDispatch } from '@/store'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form'

interface Props {
    children: React.ReactNode
}


export const AddCharaterForm: React.FC<Props> = ({ children }: Props) => {
    const form = useForm<addCharacterDto>({
        mode: 'onChange',
        resolver: zodResolver(addCharacterSchema)
    })

    const onSubmit: SubmitHandler<addCharacterDto> = (data) => {
        console.log(data);
        toast(dispatch, 'message', { text: '' })
    }
    const dispatch = useAppDispatch()

    return (
        <FormProvider {...form}>

            <form action="" onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col h-full'>
                <Title className='mb-1'>ДОБАВЛЕНИЕ ИГРЫ</Title>
                <p className='pb-6'>используйте персонажей с сайта <a href="">aternia.games</a>!</p>
                <TextInput placeHolder='Ссылка' name='link' />
                <div className="flex flex-1 gap-4 justify-end items-end">
                    {children}
                </div>
            </form>
        </FormProvider>
    )
}
