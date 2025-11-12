import React from 'react'
import { Link } from 'react-router-dom'

interface Props {
    id: number
    name: string
}


export const GameItem: React.FC<Props> = ({ id, name }: Props) => {
    return (
        <Link to={`/game/${id}`} className='mount-opacity overflow-hidden relative h-[85px] transition-03 hover:pt-10' style={{ transformOrigin: 'bottom' }}>
            <div className="h-full w-full absolute top-0 bg-img bg-shadow rounded-sm" style={{ backgroundImage: `url(${'/img/dnd+.jpg'})` }}></div>
            <p className='overflow-hidden max-h-full text-ellipsis absolute p-2 px-3'>{name}</p>
        </Link>
    )
}
