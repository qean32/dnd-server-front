import React from 'react'
import { TextInput, Button, ImgInput, Title } from '@component/ui'
import { Link } from 'react-router-dom'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { toast } from '@/lib/function'
import { authFormDto, authSchema } from '@/model/schema'
import { useAppDispatch } from '@/store'
import { zodResolver } from '@hookform/resolvers/zod'

interface Props {
}


export const EditProfileForm: React.FC<Props> = ({ }: Props) => {
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
                    <Title>РЕДАКТОР</Title>
                    <div className="flex-1 w-[35vh] pt-2 flex flex-col justify-between pb-3">
                        <div className="flex gap-2 flex-col">
                            <TextInput placeHolder="никнейм" name='name' />
                            <ImgInput title='фото профиля' className='pl-1 pt-5' />
                        </div>
                        <Link to={'/change-password'} className='pl-1 cursor-pointer'>Изменить пароль</Link>
                    </div>
                    <Button className="px-5 py-3" variant='acceess' children={<p>Редактировать</p>} />
                </div>
            </form>
        </FormProvider>
    )
}
