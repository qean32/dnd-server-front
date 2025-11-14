import React from 'react'
import { entityDto } from '@/model'

export const InStoreEntityItem: React.FC<entityDto> = ({
    discription = 'Описание ОписаниеОписаниеОписание Описание',
    path = '/img/goblin.jpg',
    name = "Гоблин Гоблин",
}: entityDto) => {
    return (
        <div
            className="px-4 py-5 flex gap-5 bg-color bg-color-dark-hover transition-03 rounded-md cursor-pointer hover-hide-img child-no-fill-event"
            data={JSON.stringify({ name, path, discription, isEntity: true })}
        >
            <div className="w-[65px] aspect-square h-fit bg-img transition-03 rounded-full" style={{ backgroundImage: `url(${path})` }}></div>
            <div className='w-1/2 hover-w-full h-fit'>
                <p className='text-2xl unwrap-text w-full overflow-hidden text-ellipsis text-nowrap'>{name}</p>
                <p className='text-sm unwrap-text-no-wrap w-full overflow-hidden text-ellipsis text-nowrap'>{discription}</p>
            </div>
        </div>
    )
}
