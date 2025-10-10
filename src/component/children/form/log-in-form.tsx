import React from 'react'
import { TextInput, Button } from '../../ui'

interface Props {
}


export const LogInForm: React.FC<Props> = ({ }: Props) => {
    return (
        <div className="w-1/2 h-full flex justify-center">
            <div className="w-fit flex flex-col gap-3">
                <p className="text-3xl pl-0.5">ВХОД</p>
                <div className="flex-1 w-[300px] pt-2">
                    <TextInput placeHolder="никнейм или почта" />
                    <TextInput placeHolder="пароль" />
                </div>
                <Button children={<p>Вход</p>} className="bg-color px-4" />
            </div>
        </div>
    )
}
