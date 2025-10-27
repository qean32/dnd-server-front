import React from 'react'
import { stopPropagation } from '../../../lib/function'
import { Modal } from '../../general/hoc'

interface Props {
    view: boolean
    swap: React.MouseEventHandler<HTMLDivElement>
}


export const RightImg: React.FC<Props> = ({ view, swap }: Props) => {
    return (
        <Modal
            swap={swap}
            view={view}
            className='justify-end h-full' animation={{
                open: 'right-modal-open',
                close: 'right-modal-close'
            }}
        >
            <div onClick={stopPropagation} className='bg-color h-full w-[200px]'>zxc</div>
        </Modal>
    )
}
