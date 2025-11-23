import React from 'react'
import { Title, Button, TextInput } from '@component/ui'
import { toast } from '@/lib/function'
import { authFormDto, authSchema } from '@/model/schema'
import { useAppDispatch } from '@/store'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form'

interface Props {
}


export const ResetPasswordForm: React.FC<Props> = ({ }: Props) => {
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

            <form className="w-1/2 h-full flex justify-center" onSubmit={form.handleSubmit(onSubmit)}>
                <div className="w-fit flex flex-col gap-3">
                    <Title className="pb-4">Востановление пароля</Title>
                    <div className="w-[35vh]">
                        <TextInput placeHolder="Введите почту" name='email' className='mb-5' />
                        <Button variant="acceess" className="w-full py-3">Отправить</Button>
                    </div>
                </div>
            </form>
        </FormProvider>
    )
}
