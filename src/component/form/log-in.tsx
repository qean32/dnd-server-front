import React from 'react'
import { Button, TextInput } from '../ui'

interface Props {
}


export const LogIn: React.FC<Props> = ({ }: Props) => {
    return (
        <div className="w-1/2 h-full py-20 flex justify-center">
            <div className="fit-content flex flex-col gap-3">
                <p className="f-30">ВХОД</p>
                <div className="flex-1 w-[300px]">
                    <TextInput placeHolder="никнейм или почта" />
                    <TextInput placeHolder="пароль" />
                </div>
                <Button children={<p>Вход</p>} className="bg-color px-4" />
            </div>
        </div>
    )
}
