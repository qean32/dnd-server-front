import React from 'react'
import { Link } from 'react-router-dom'

interface Props {
}


export const Post: React.FC<Props> = ({ }: Props) => {
    return (
        <Link to={'/post/1'}>
            <div className='py-4 grid bg-color-light-hover cursor-pointer transition03' style={{ gridTemplateColumns: '5fr 1fr 1fr 1fr' }}>
                <div className='flex flex-col gap-1 pl-1'>
                    <p className='text-2xl'>Тема</p>
                    <p className='text-sm'>Описание</p>
                </div>
                <p>zxccused</p>
                <p>Раздел</p>
                <p className='translate-x-0.5'>444</p>
            </div>
        </Link>
    )
}
