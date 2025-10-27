import React from 'react'
import { TextInput, Button, PasswordInput, Checkbox } from '../../ui'

interface Props {
}


export const SignInForm: React.FC<Props> = ({ }: Props) => {
    return (
        <div className="w-1/2 h-full flex justify-center rounded-md">
            <div className="w-fit flex flex-col gap-3">
                <p className="text-3xl pl-0.5">РЕГИСТРАЦИЯ</p>
                <div className="flex-1 w-[300px] pt-2">
                    <TextInput placeHolder="никнейм" />
                    <TextInput placeHolder="почта" />
                    <PasswordInput placeHolder="пароль" />
                    <PasswordInput placeHolder="повторите пароль" />
                    <Checkbox fn={() => { }} title='согласие на' value />
                </div>
                <Button variant='acceess' className="px-5 py-3" children={<p>Регистрация</p>} />
            </div>
        </div>
    )
}
