import React from 'react'
import { Title, Button, TextInput } from '@component/ui'

interface Props {
}


export const ResetPasswordForm: React.FC<Props> = ({ }: Props) => {
    return (
        <div className="w-1/2 h-full flex justify-center">
            <div className="w-fit flex flex-col gap-3">
                <Title className="pb-4">Востановление пароля</Title>
                <div className="w-[35vh]">
                    <TextInput placeHolder="Введите почту" />
                    <Button variant="acceess" className="w-full py-3">Отправить</Button>
                </div>
            </div>
        </div>
    )
}
