import React from 'react'
import { DefaultSetModal } from '../../general/default-set-modal'
import { stopPropagation } from '../../../lib/function'

interface Props {
    view: boolean
    swap: React.MouseEventHandler<HTMLDivElement>
}


export const RightImgModal: React.FC<Props> = ({ view, swap }: Props) => {
    return (
        <DefaultSetModal
            swap={swap}
            view={view}
            className='justify-end h-full' animation={{
                open: 'right-modal-open',
                close: 'right-modal-close'
            }}
        >
            <div onClick={stopPropagation} className='bg-color-light h-full w-[200px]'>zxc</div>
        </DefaultSetModal>
    )
}
