import React from 'react'
import { entityDto } from '../../../../model'

interface Props {
    entity?: entityDto
}

export const InStoreEntityItem: React.FC<Props> = ({ entity = {
    discription: 'Описание',
    id: 1,
    path: '/img/goblin.jpg',
    name: "Гоблин",
    position: { x: 0, y: 0 },
    size: 50,
    status: 'live',
    view: true
} }: Props) => {
    return (
        <div className="px-4 flex py-5 gap-5 bg-color bg-color-dark-hover transition-03 rounded-md cursor-pointer">
            <div className="w-[58px] aspect-square bg-img rounded-full" style={{ backgroundImage: `url(${entity.path})` }}></div>
            <div>
                <p className='text-2xl'>{entity.name}</p>
                <p className='text-sm max-w-[9vh] overflow-hidden text-ellipsis text-nowrap'>{entity.discription}</p>
            </div>
        </div>
    )
}
