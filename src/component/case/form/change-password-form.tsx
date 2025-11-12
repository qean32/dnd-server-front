import React from 'react'
import { Title, PasswordInput, Button } from '../../ui'

interface Props {
}


export const ChangePasswordForm: React.FC<Props> = ({ }: Props) => {
    return (
        <div className="bg-color-dark h-3/4 rounded-lg py-5 pb-8 px-12">
            <Title className="pb-4">Изменение пароля</Title>
            <div className="w-[35vh]">
                <PasswordInput placeHolder="Введите пароль" />
                <PasswordInput placeHolder="Повторите пароль" />
                <Button variant="acceess" className="p-2 px-3" >Сохранить</Button>
            </div>
        </div>
    )
}
