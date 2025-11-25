import React from 'react'
import { Title, TextInput, SelectSessionBG } from '@component/ui'
import { toast } from '@/lib/function'
import { addSessionFormDto, addSessionSchema } from '@/model/schema'
import { useAppDispatch } from '@/store'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form'

interface Props {
    children: React.ReactNode
}


export const AddSessionForm: React.FC<Props> = ({ children }: Props) => {
    const form = useForm<addSessionFormDto>({
        mode: 'onChange',
        resolver: zodResolver(addSessionSchema)
    })

    const onSubmit: SubmitHandler<addSessionFormDto> = (data) => {
        console.log(data);
        toast(dispatch, 'message', { text: '' })
    }
    const dispatch = useAppDispatch()

    return (
        <FormProvider {...form}>

            <form action="" onSubmit={form.handleSubmit(onSubmit)}>
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
