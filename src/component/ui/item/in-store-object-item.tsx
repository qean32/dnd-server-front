import React from 'react'
import { objectDto } from '@/model'

export const InStoreObjectItem: React.FC<objectDto> = ({
    path = '/img/carousel-item-1.jpg',
    name = 'Таверна у Хагрида'
}: objectDto) => {
    return (
        <div
            className="flex gap-4 mount-opacity h-[12vh] m-1 p-2 cursor-pointer bg-color-dark-hover transition-300 rounded-sm hover-hide-img child-no-fill-event"
            data={JSON.stringify({ name, path, isObject: true })}
        >
            <div className="h-full w-1/2 bg-img bg-shadow transition-300 rounded-sm" style={{ backgroundImage: `url(${path})` }}></div>
            <p className='unwrap-text w-1/2 h-full overflow-hidden text-ellipsis rounded-sm'>{name}</p>
        </div>
    )
}
