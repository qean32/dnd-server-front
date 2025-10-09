import React from 'react'

interface Props {
}


export const Post: React.FC<Props> = ({ }: Props) => {
    return (
        <div className='py-4 grid bg-color-light-hover cursor-pointer transition03' style={{ gridTemplateColumns: '5fr 1fr 1fr 1fr' }}>
            <div className='flex flex-col gap-2'>
                <p className='text-2xl'>Тема</p>
                <p className='text-lg'>Описание</p>
            </div>
            <p>Автор</p>
            <p>Тема</p>
            <p className='translate-x-0.5'>444</p>
        </div>
    )
}
