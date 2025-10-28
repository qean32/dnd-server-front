import React from 'react'
import { stopPropagation } from '../../../lib/function'
import { Modal } from '../../general/hoc'
import { AddCharaterForm } from '../form'

interface Props {
    view: boolean
    swap: React.MouseEventHandler<HTMLDivElement>
}


export const AddCharacter: React.FC<Props> = ({ view, swap }: Props) => {
    return (
        <Modal
            swap={swap}
            view={view}
            animation={{
                open: 'modal-open',
                close: 'modal-close'
            }}
        >
            <div className="bg-color p-5 w-2/9 px-7 rounded-md overflow-scroll flex flex-col -translate-y-1/2" onClick={stopPropagation}>
                <AddCharaterForm />
            </div>
        </Modal>
    )
}
