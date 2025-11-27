import React from 'react'
import { useAppDispatch } from '@lib/castom-hook/redux'
import { swapViewImg } from '@/store/view-img-store'
import { mapDto } from '@/model'


export const InStoreMapItem: React.FC<mapDto> = ({
    path = '/img/carousel-item-1.jpg',
    name = 'Таверна у Хагрида Таверна у Хагрида',
    size = { x: 1200, y: 500 },
}: mapDto) => {
    const dispath = useAppDispatch()

    const clickHAndler = () => {
        dispath(swapViewImg({ path }))
    }
    return (
        <div
            className="flex gap-4 mount-opacity h-[12vh] m-1 p-2 cursor-pointer bg-color-dark-hover transition-300 rounded-sm hover-hide-img"
            data={JSON.stringify({ name, path, isMap: true, size })}
        >
            <div className="h-full w-1/2 bg-img bg-shadow transition-300 rounded-sm" style={{ backgroundImage: `url(${path})` }} onClick={clickHAndler}></div>
            <p className='pointer-events-none unwrap-text w-1/2 h-full text-nowrap overflow-hidden text-ellipsis rounded-sm'>{name}</p>
        </div>
    )
}
