import React from 'react'
import { useAppDispatch } from '../../../lib/castom-hook/redux'
import { swapViewImg } from '../../../store/view-img-store'

interface Props {
}


export const MapItem: React.FC<Props> = ({ }: Props) => {
    const dispath = useAppDispatch()

    const clickHAndler = () => {
        dispath(swapViewImg({ href: '/img/dnd+.jpg' }))
    }
    return (
        <div className="mount-opacity relative h-[9vh] cursor-pointer" onClick={clickHAndler}>
            <div className="h-full w-full absolute top-0 bg-img bg-shadow rounded-sm" style={{ backgroundImage: `url(${'/img/dnd+.jpg'})` }}></div>

            <div className="absolute top-0.5 right-0.5">

            </div>
        </div>
    )
}
