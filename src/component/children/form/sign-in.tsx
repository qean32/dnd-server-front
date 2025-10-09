import React from 'react'
import { TextInput, Button } from '../../ui'

interface Props {
}


export const SignIn: React.FC<Props> = ({ }: Props) => {
    return (
        <div className="w-1/2 h-full py-20 flex justify-center rounded-md">
            <div className="fit-content flex flex-col gap-3">
                <p className="text-3xl">РЕГИСТРАЦИЯ</p>
                <div className="flex-1 w-[300px]">
                    <TextInput placeHolder="никнейм" />
                    <TextInput placeHolder="почта" />
                    <TextInput placeHolder="пароль" />
                    <TextInput placeHolder="повторите пароль" />
                </div>
                <Button children={<p>Регистрация</p>} className="bg-color px-4" />
            </div>
        </div>
    )
}
