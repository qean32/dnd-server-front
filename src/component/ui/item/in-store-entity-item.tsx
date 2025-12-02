import React from 'react'
import { entityDto } from '@/model'

export const InStoreEntityItem: React.FC<entityDto> = ({
    description = 'Тайвин Ланнистер — вымышленный персонаж фэнтезийного сериала «Песнь льда и пламени» американского писателя Джорджа Р. Р. Мартина и его телевизионной адаптации «Игра престолов».',
    path = '/img/entity.jpg',
    name = "Гоблин Гоблин",
    initiative = 10,
    size = 50,
    source = {
        id: 1,
        name: '1'
    },
    status = 'dead',
    id = 52,
    position = { y: 0, x: 0 },
    view = true
}: entityDto) => {
    return (
        <div
            className="px-4 py-5 flex gap-5 bg-color bg-color-dark-hover transition-300 rounded-md cursor-pointer hover-hide-img child-no-fill-event"
            data={JSON.stringify({ name, path, description, initiative, id, status, position, view, size, source, isEntity: true })}
        >
            <div className="w-[65px] aspect-square h-fit bg-img transition-300 rounded-full" style={{ backgroundImage: `url(${path})` }}></div>
            <div className='w-1/2 hover-w-full h-fit'>
                <p className='text-2xl unwrap-text w-full overflow-hidden text-ellipsis text-nowrap'>{name}</p>
                <p className='text-sm unwrap-text-no-wrap w-full overflow-hidden text-ellipsis text-nowrap'>{description}</p>
            </div>
        </div>
    )
}
