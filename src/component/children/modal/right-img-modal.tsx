import React from 'react'
import { DefaultSetModal } from '../../general/default-set-modal'

interface Props {
    view: boolean
}


export const RightImgModal: React.FC<Props> = ({ view }: Props) => {
    return (
        <DefaultSetModal view={view} className='justify-end h-full' animation={{
            open: 'right-modal-open',
            close: 'right-modal-close'
        }}
            className_='h-full'>
            <p className='bg-color-light h-full w-[200px]'>zxc</p>
        </DefaultSetModal>
    )
}
