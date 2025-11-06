import React from 'react'
import { TextInput, Button, PasswordInput, Title } from '../../ui'

interface Props {
}


export const LogInForm: React.FC<Props> = ({ }: Props) => {
    return (
        <div className="w-1/2 h-full flex justify-center">
            <div className="w-fit flex flex-col gap-3">
                <Title>ВХОД</Title>
                <div className="flex-1 w-[300px] pt-2">
                    <TextInput placeHolder="никнейм или почта" />
                    <PasswordInput placeHolder="пароль" />
                </div>
                <Button className="px-5 py-3" variant='acceess' children={<p>Вход</p>} />
            </div>
        </div>
    )
}
