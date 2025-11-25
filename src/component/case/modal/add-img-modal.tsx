import React from 'react'
import { stopPropagation } from '@/lib/function'
import { Modal } from '@component/master/h-order-component'
import { UploadImgArea, Button, ModalCross } from '@component/ui'

interface Props {
    view: boolean
    swap: React.MouseEventHandler<HTMLDivElement | HTMLButtonElement>
}


export const AddImg: React.FC<Props> = ({ view, swap }: Props) => {


    return (
        <Modal
            swap={swap}
            view={view}
            animation={{
                open: 'modal-open',
                close: 'modal-close'
            }}
        >
            <div className="bg-color w-5/12 h-8/12 rounded-md flex flex-col overflow-hidden relative" onClick={stopPropagation}>
                <ModalCross fn={swap} />
                <UploadImgArea className='w-full h-10/12' name='' />
                <div className="flex gap-5 justify-end p-5 flex-1 items-end">
                    <Button variant='ghost'><p>Отмена</p></Button>
                    <Button variant='acceess'><p>Добавить</p></Button>
                </div>
            </div>
        </Modal>
    )
}
