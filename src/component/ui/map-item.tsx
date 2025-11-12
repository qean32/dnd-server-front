import React from 'react'
import { ContextMenu } from '../shared'
import { useAppDispatch } from '../../lib/castom-hook/redux'
import { swapViewImg } from '../../store/view-img'

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
                <ContextMenu>
                    <div className="absolute -bottom-1 right-3 translate-y-full z-20 bg-color p-3 px-0 rounded-sm cursor-pointer">
                        <div className="flex flex-col items-end">
                            <div className='flex flex-col children-font-sm text-end gap-2'>
                                <p className='text-nowrap py-2 bg-color-dark-hover px-3'>Удалить</p>
                            </div>
                        </div>
                    </div>
                </ContextMenu>
            </div>
        </div>
    )
}
