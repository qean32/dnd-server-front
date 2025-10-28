import React from 'react'
import { Title, TextInput, Button } from '../../ui'

interface Props {
}


export const AddCharaterForm: React.FC<Props> = ({ }: Props) => {
    return (
        <form action="">
            <Title className='mb-5'>ДОБАВЛЕНИЕ ИГРЫ</Title>
            <TextInput placeHolder='Имя' />
            <Button variant='acceess' className='mt-4 px-3 py-2'><p>Добавить</p></Button>
        </form>
    )
}
