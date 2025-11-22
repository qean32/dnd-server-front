import React from 'react'
import { TextInput, Button, PasswordInput, Title } from '@component/ui'
import { Link } from 'react-router-dom'

interface Props {
}


export const LogInForm: React.FC<Props> = ({ }: Props) => {
    return (
        <div className="w-1/2 h-full flex justify-center">
            <div className="w-fit flex flex-col gap-3">
                <Title>ВХОД</Title>
                <div className="flex-1 w-[35vh] pt-2">
                    <TextInput placeHolder="никнейм или почта" />
                    <PasswordInput placeHolder="пароль" />
                    <Link className='text-sm' to={'/reset-password'}>востановить пароль</Link>
                </div>
                <Button className="px-5 py-3" variant='acceess' children={<p>Вход</p>} />
            </div>
        </div>
    )
}
