import React from 'react'
import { stopPropagation } from '../../../lib/function'
import { Modal } from '../../general/hoc'

interface Props {
    view: boolean
    swap: React.MouseEventHandler<HTMLDivElement>
}


export const NotesModal: React.FC<Props> = ({ view, swap }: Props) => {
    return (
        <Modal
            swap={swap}
            view={view}
            animation={{
                open: 'modal-open',
                close: 'modal-close'
            }}
        >
            <div className="bg-color-light w-9/12 h-10/12 p-5 rounded-md overflow-scroll flex flex-col" onClick={stopPropagation}>
                <p className='text-xl pb-10'>Заметки</p>
                <textarea placeholder="Ваш пост!" className="container p-2 px-3 flex-1"></textarea>
            </div>
        </Modal>
    )
}
