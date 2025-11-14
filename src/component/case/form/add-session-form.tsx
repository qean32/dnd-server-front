import React from 'react'
import { Title, TextInput, SelectSessionBG } from '@component/ui'

interface Props {
    children: React.ReactNode
}


export const AddSessionForm: React.FC<Props> = ({ children }: Props) => {
    return (
        <form action="">
            <Title className='mb-5'>ДОБАВЛЕНИЕ СЕССИИ</Title>
            <TextInput placeHolder='Название сессии' className='w-[360px]' />
            <SelectSessionBG />
            <div className="pt-8 flex gap-4 justify-end">
                {children}
            </div>
        </form>
    )
}
