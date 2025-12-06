import React from 'react'
import { stopPropagation } from '@/lib/function'
import { Modal } from '@component/master/h-order-component'
import { useAppSelector } from '@/lib/castom-hook/redux'
import { NoFindData } from '@/component/ui'

interface Props {
    view: boolean
    swap: React.MouseEventHandler<HTMLDivElement>
}


export const EntityMore: React.FC<Props> = ({ view, swap }: Props) => {
    const { bestiary } = useAppSelector(state => state.session)
    const entity = bestiary.find(item => item.id == Number(view))


    return (
        <Modal
            swap={swap}
            view={view}
            className='justify-end h-full'
            animation={{
                open: 'right-modal-open',
                close: 'right-modal-close'
            }}
        >
            {entity ?
                <div onClick={stopPropagation} className='bg-color h-full w-[340px] flex items-center justify-start pt-3 flex-col'>
                    <div className="w-11/12 bg-color-dark aspect-square rounded-sm"></div>
                    <div className="w-11/12 rounded-sm pt-4">
                        <p className='text-2xl'>НАИМЕНОВАНИЕ</p>
                        <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sunt natus ad voluptas voluptates explicabo labore doloribus harum asperiores quidem!</p>

                    </div>
                </div>
                :
                <div onClick={stopPropagation} className='bg-color h-full w-[340px] flex'><NoFindData title='Сущность не найдена' view /></div>
            }
        </Modal>
    )
}
