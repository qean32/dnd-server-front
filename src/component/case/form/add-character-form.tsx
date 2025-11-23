import React from 'react'
import { Title, TextInput } from '@component/ui'
import { toast } from '@/lib/function'
import { authFormDto, authSchema } from '@/model/schema'
import { useAppDispatch } from '@/store'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form'

interface Props {
    children: React.ReactNode
}


export const AddCharaterForm: React.FC<Props> = ({ children }: Props) => {
    const form = useForm<authFormDto>({
        mode: 'onChange',
        resolver: zodResolver(authSchema)
    })
    const [error] = React.useState<string>()

    const onSubmit: SubmitHandler<authFormDto> = (data) => {
        console.log(data);
        toast(dispatch, 'message', { text: error })
    }
    const dispatch = useAppDispatch()

    return (
        <FormProvider {...form}>

            <form action="" onSubmit={form.handleSubmit(onSubmit)}>
                <Title className='mb-1'>ДОБАВЛЕНИЕ ИГРЫ</Title>
                <p className='pb-6'>используйте персонажей с сайта <a href="">aternia.games</a>!</p>
                <TextInput placeHolder='Ссылка' name='link' />
                <div className="flex gap-4 justify-end pt-8">
                    {children}
                </div>
            </form>
        </FormProvider>
    )
}
