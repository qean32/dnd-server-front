import React from 'react'
import { Title, PasswordInput, Button } from '@component/ui'
import { toast } from '@/lib/function'
import { changePasswordFormDto, changePasswordSchema } from '@/model/schema'
import { useAppDispatch } from '@/store'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form'

interface Props {
}


export const ChangePasswordForm: React.FC<Props> = ({ }: Props) => {
    const form = useForm<changePasswordFormDto>({
        mode: 'onChange',
        resolver: zodResolver(changePasswordSchema)
    })

    const onSubmit: SubmitHandler<changePasswordFormDto> = (data) => {
        console.log(data);
        toast(dispatch, 'message', { text: '' })
    }
    const dispatch = useAppDispatch()

    return (
        <FormProvider {...form}>

            <form className="w-1/2 h-full flex justify-center" onSubmit={form.handleSubmit(onSubmit)}>
                <div className="w-fit flex flex-col gap-3">
                    <Title className="pb-4">Изменение пароля</Title>
                    <div className="w-[35vh] flex flex-col gap-5">
                        <PasswordInput placeHolder="Введите пароль" name='password' />
                        <PasswordInput placeHolder="Повторите пароль" name='confirmPassword' />
                        <Button variant="acceess" className="w-full py-3" >Сохранить</Button>
                    </div>
                </div>
            </form>
        </FormProvider>
    )
}
