import React from 'react'
import { stopPropagation } from '../../../lib/function'
import { Modal } from '../../general/hoc'
import { ModalCross } from '../../ui'

interface Props {
    view: boolean
    swap: React.MouseEventHandler<HTMLDivElement>
}


export const Notes: React.FC<Props> = ({ view, swap }: Props) => {
    return (
        <Modal
            swap={swap}
            view={view}
            animation={{
                open: 'modal-open',
                close: 'modal-close'
            }}
        >
            <div className="relative bg-color w-9/12 h-10/12 px-5 pt-4 rounded-md overflow-scroll flex flex-col" onClick={stopPropagation}>
                <ModalCross fn={swap} />
                <p className='text-xl pb-2 pl-0.5'>Заметки</p>
                <textarea placeholder="Ваши заметки" className="container p-2 px-3 flex-1"></textarea>
            </div>
        </Modal>
    )
}
