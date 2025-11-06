import React from 'react'
import { stopPropagation } from '../../../lib/function'
import { Modal } from '../../general/hoc'
import { ModalCross } from '../../ui'

interface Props {
    view: boolean
    swap: React.MouseEventHandler<HTMLDivElement | HTMLButtonElement>
}


export const AddObject: React.FC<Props> = ({ view, swap }: Props) => {
    return (
        <Modal
            swap={swap}
            view={view}
            animation={{
                open: 'modal-open',
                close: 'modal-close'
            }}
        >
            <div className="bg-color w-8/12 h-9/12 rounded-md flex overflow-hidden relative" onClick={stopPropagation}>
                <ModalCross fn={swap} />
            </div>
        </Modal>
    )
}
