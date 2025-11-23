import React from 'react'
import { TextInput, Button, PasswordInput, Checkbox, Title } from '@component/ui'
import { registrationFormDto, registrationSchema } from '@/model/schema'
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod';
import { useAppDispatch } from '@/lib/castom-hook/redux'
import { toast } from '@/lib/function'

interface Props {
}


export const RegistrationForm: React.FC<Props> = ({ }: Props) => {
    const form = useForm<registrationFormDto>({
        mode: 'onChange',
        resolver: zodResolver(registrationSchema)
    })
    const [error] = React.useState<string>()

    const onSubmit: SubmitHandler<registrationFormDto> = (data) => {
        console.log(data);
        toast(dispatch, 'message', { text: error })
    }
    const dispatch = useAppDispatch()

    return (
        <FormProvider {...form}>

            <form className="w-1/2 h-full flex justify-center rounded-md" onSubmit={form.handleSubmit(onSubmit)}>
                <div className="w-fit flex flex-col gap-3">
                    <Title>РЕГИСТРАЦИЯ</Title>
                    <div className="flex-1 w-[35vh] pt-2 flex flex-col gap-5">
                        <TextInput placeHolder="никнейм" name='name' />
                        <TextInput placeHolder="почта" name='email' />
                        <PasswordInput placeHolder="пароль" name='password' />
                        <PasswordInput placeHolder="повторите пароль" name='confirmPassword' />
                        <Checkbox fn={() => { }} title='мне больше 18 лет и я согласен с условиями конфиденциальности' value />
                    </div>
                    <Button variant='acceess' className="px-5 py-3" children={<p>Регистрация</p>} />
                </div>
            </form>
        </FormProvider>
    )
}
