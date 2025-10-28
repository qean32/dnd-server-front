import React from 'react'
import { Title, TextInput, Button, SelectGameBG } from '../../ui'

interface Props {
}


export const AddGameForm: React.FC<Props> = ({ }: Props) => {
    return (
        <form action="">
            <Title className='mb-5'>ДОБАВЛЕНИЕ ИГРЫ</Title>
            <TextInput placeHolder='Название игры' className='w-[360px]' />
            <SelectGameBG />
            <div className="pt-8 flex gap-4 justify-end">
                <Button variant='acceess'><p>Добавить</p></Button>
                <Button variant='ghost'><p>Отмена</p></Button>
            </div>
        </form>
    )
}
