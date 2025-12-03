import React from 'react'
import { useAppDispatch } from '@lib/castom-hook/redux'
import { swapViewImg } from '@/store/view-img-store'
import { mapDto } from '@/model'


export const InStoreMapItem: React.FC<mapDto> = (item: mapDto) => {
    const dispath = useAppDispatch()

    const clickHAndler = () => {
        dispath(swapViewImg({ path: item.path }))
    }
    return (
        <div
            className="flex gap-4 mount-opacity h-[12vh] m-1 p-2 cursor-pointer bg-color-dark-hover transition-300 rounded-sm hover-hide-img"
            data={JSON.stringify({ ...item, isMap: true })}
        >
            <div className="h-full w-1/2 bg-img bg-shadow transition-300 rounded-sm" style={{ backgroundImage: `url(${item.path})` }} onClick={clickHAndler}></div>
            <p className='pointer-events-none unwrap-text w-1/2 h-full text-nowrap overflow-hidden text-ellipsis rounded-sm'>{item.name}</p>
        </div>
    )
}
