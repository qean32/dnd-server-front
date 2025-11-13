import React from 'react'
import { stopPropagation } from '@/lib/function'
import { Modal } from '@component/master/h-order-component'
import { AddGameForm } from '@component/case/form'
import { Button, ModalCross } from '@component/ui'

interface Props {
    view: boolean
    swap: React.MouseEventHandler<HTMLDivElement>
}


export const AddGame: React.FC<Props> = ({ view, swap }: Props) => {
    return (
        <Modal
            swap={swap}
            view={view}
            animation={{
                open: 'modal-open',
                close: 'modal-close'
            }}
        >
            <div className="relative bg-color p-5 px-7 rounded-md overflow-scroll flex flex-col -translate-y-1/7" onClick={stopPropagation}>
                <ModalCross fn={swap} />
                <AddGameForm>
                    <>
                        <Button variant='ghost'><p>Отмена</p></Button>
                        <Button variant='acceess'><p>Добавить</p></Button></>
                </AddGameForm>
            </div>
        </Modal>
    )
}
