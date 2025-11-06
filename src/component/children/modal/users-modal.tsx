import React from 'react'
import { stopPropagation } from '../../../lib/function'
import { Modal } from '../../general/hoc'
import { Ava, ModalCross } from '../../ui'

interface Props {
    view: boolean
    swap: React.MouseEventHandler<HTMLDivElement>
}


export const Users: React.FC<Props> = ({ view, swap }: Props) => {
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
            <div className='relative bg-color h-full w-[300px]' onClick={stopPropagation} >
                <ModalCross fn={swap} />
                <div className="pt-10">
                    {[1, 2, 2, 2, 2].map(() => {
                        return (
                            <div className="flex px-4 py-2 gap-5 bg-color-dark-hover transition-03 bg-color cursor-pointer">
                                <Ava path='' className='bg-color-darkness' size='ava-md' />
                                <p>Zxccursed</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </Modal>
    )
}
