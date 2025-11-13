import React from 'react'
import { Title, TextInput, SelectGameBG } from '@component/ui'

interface Props {
    children: React.ReactNode
}


export const AddGameForm: React.FC<Props> = ({ children }: Props) => {
    return (
        <form action="">
            <Title className='mb-5'>ДОБАВЛЕНИЕ ИГРЫ</Title>
            <TextInput placeHolder='Название игры' className='w-[360px]' />
            <SelectGameBG />
            <div className="pt-8 flex gap-4 justify-end">
                {children}
            </div>
        </form>
    )
}
