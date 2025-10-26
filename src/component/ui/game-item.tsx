import React from 'react'
import { Link } from 'react-router-dom'

interface Props {
    id: number
    name: string
}


export const GameItem: React.FC<Props> = ({ id, name }: Props) => {
    return (
        <Link to={`${id}`} className='overflow-hidden relative w-1/8 h-[85px] transition-03 hover:-translate-x-1'>
            <div className="h-full w-full absolute top-0 bg-img bg-shadow rounded-sm" style={{ backgroundImage: `url(${'/img/dnd+.jpg'})` }}></div>
            <p className='overflow-hidden max-h-full text-ellipsis absolute p-2 px-3'>{name}</p>
        </Link>
    )
}
