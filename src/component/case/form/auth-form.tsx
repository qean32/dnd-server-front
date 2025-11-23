import React from 'react'
import { TextInput, Button, PasswordInput, Title } from '@component/ui'
import { Link } from 'react-router-dom'
import { toast } from '@/lib/function'
import { authFormDto, authSchema } from '@/model/schema'
import { useAppDispatch } from '@/store'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form'

interface Props {
}


export const AuthForm: React.FC<Props> = ({ }: Props) => {
    const form = useForm<authFormDto>({
        mode: 'onChange',
        resolver: zodResolver(authSchema)
    })
    const [error] = React.useState<string>()

    const onSubmit: SubmitHandler<authFormDto> = (data) => {
        console.log(data);
        toast(dispatch, 'message', { text: error })
        // authService.registration(data)
        //     // @ts-ignore
        //     .then(data => setToken(data))
        //     .then(() => navigate('/'))
        //     .catch((error) => setError(error.response.data.message))
    }
    const dispatch = useAppDispatch()

    return (
        <FormProvider {...form}>

            <form className="w-1/2 h-full flex justify-center" onSubmit={form.handleSubmit(onSubmit)}>
                <div className="w-fit flex flex-col gap-3">
                    <Title>ВХОД</Title>
                    <div className="flex-1 w-[35vh] pt-2 flex flex-col gap-5">
                        <TextInput placeHolder="никнейм или почта" name='nameOrEmail' />
                        <PasswordInput placeHolder="пароль" name='password' />
                        <Link className='text-sm' to={'/reset-password'}>востановить пароль</Link>
                    </div>
                    <Button className="px-5 py-3" variant='acceess' children={<p>Вход</p>} />
                </div>
            </form>
        </FormProvider>
    )
}
