import React from 'react'
import { stopPropagation } from '../../../lib/function'
import { Modal } from '../../general/hoc'
import { fakePost } from '../../../fake-data'
import { MapItem, ModalCross, PlusButton } from '../../ui'
import * as ModalGroup from './index-group'

interface Props {
    view: boolean
    swap: React.MouseEventHandler<HTMLDivElement>
}


export const MapsGame: React.FC<Props> = ({ view, swap }: Props) => {
    return (
        <Modal
            swap={swap}
            view={view}
            animation={{
                open: 'modal-open',
                close: 'modal-close'
            }}
        >
            <div className="relative bg-color w-6/12 h-5/12 p-5 rounded-md overflow-scroll flex flex-col" onClick={stopPropagation}>
                <ModalCross fn={swap} />
                <p className='pl-5 pt-2 text-2xl'>Карты</p>
                <div className='grid gap-5 p-5 grid-cols-6'>
                    {fakePost.slice(0, 9).map((__, _) =>
                        <MapItem key={_} />
                    )}
                    <ModalGroup.Set Modal={ModalGroup.AddMapInGame}>
                        <PlusButton className='h-[85px] w-1/9 px-5' iconSize='icon-sm' />
                    </ModalGroup.Set>
                </div>
            </div>
        </Modal>
    )
}
