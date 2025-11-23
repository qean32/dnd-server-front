import React from 'react'
import { Title, PasswordInput, Button } from '@component/ui'

interface Props {
}


export const ChangePasswordForm: React.FC<Props> = ({ }: Props) => {
    return (
        <div className="w-1/2 h-full flex justify-center">
            <div className="w-fit flex flex-col gap-3">
                <Title className="pb-4">Изменение пароля</Title>
                <div className="w-[35vh] flex flex-col gap-5">
                    <PasswordInput placeHolder="Введите пароль" />
                    <PasswordInput placeHolder="Повторите пароль" />
                    <Button variant="acceess" className="w-full py-3" >Сохранить</Button>
                </div>
            </div>
        </div>
    )
}
