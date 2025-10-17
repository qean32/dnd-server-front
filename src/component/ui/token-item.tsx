import React from 'react'
import { entityDto } from '../../model'

interface Props {
    entity?: entityDto
}

export const TokenItem: React.FC<Props> = ({ entity = {
    discription: 'no',
    id: 1,
    path: '/img/goblin.jpg',
    name: "Гоблин",
    position: { left: 0, top: 0 },
    status: 'live',
    view: true
} }: Props) => {
    return (
        <div className="w-1/9 aspect-square flex flex-col justify-center items-center gap-2 pt-2 mount-opacity bg-color-hover transition03 cursor-pointer rounded-xl">
            <div className="w-3/6 aspect-square bg-img rounded-xl" style={{ backgroundImage: `url(${entity.path})` }}></div>
            <p className='text-xl'>{entity.name}</p>
        </div>
    )
}
