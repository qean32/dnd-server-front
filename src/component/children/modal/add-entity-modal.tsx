import React from 'react'
import { stopPropagation } from '../../../lib/function'
import { Modal } from '../../general/hoc'
import { TokenItem } from '../../ui'

interface Props {
    view: boolean
    swap: React.MouseEventHandler<HTMLDivElement>
}


export const AddEntity: React.FC<Props> = ({ view, swap }: Props) => {
    return (
        <Modal
            swap={swap}
            view={view}
            animation={{
                open: 'modal-open',
                close: 'modal-close'
            }}
        >
            <div className="bg-color w-7/12 h-9/12 p-5 rounded-md overflow-scroll flex flex-col" onClick={stopPropagation}>
                <TokenItem />
                <TokenItem />
                <TokenItem />
                <TokenItem />
            </div>
        </Modal>
    )
}
