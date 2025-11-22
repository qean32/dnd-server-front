import React from 'react'
import { Title, Button, TextInput } from '@component/ui'

interface Props {
}


export const ResetPasswordForm: React.FC<Props> = ({ }: Props) => {
    return (
        <div className="bg-color-dark h-3/4 rounded-lg py-5 pb-8 px-12">
            <Title className="pb-4">Востановление пароля</Title>
            <div className="w-[35vh]">
                <TextInput placeHolder="Введите почту" />
                <Button variant="acceess" className="p-2 px-3" >Отправить</Button>
            </div>
        </div>
    )
}
