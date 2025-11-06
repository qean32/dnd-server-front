import React from 'react'
import { Title, TextInput } from '../../ui'

interface Props {
    children: React.ReactNode
}


export const AddCharaterForm: React.FC<Props> = ({ children }: Props) => {
    return (
        <form action="">
            <Title className='mb-1'>ДОБАВЛЕНИЕ ИГРЫ</Title>
            <p className='pb-6'>используйте персонажей с сайта <a href="">aternia.games</a>!</p>
            <TextInput placeHolder='Ссылка' />
            <div className="flex gap-4 justify-end pt-8">
                {children}
            </div>
        </form>
    )
}
