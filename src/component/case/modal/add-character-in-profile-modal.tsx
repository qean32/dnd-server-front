import React from 'react'
import { stopPropagation } from '@/lib/function'
import { Modal } from '@component/master/h-order-component'
import { AddCharaterForm } from '@component/case/form'
import { Button, ModalCross } from '@component/ui'

interface Props {
    view: boolean
    swap: React.MouseEventHandler<HTMLDivElement | HTMLButtonElement>
}


export const AddCharacterInProfile: React.FC<Props> = ({ view, swap }: Props) => {
    return (
        <Modal
            swap={swap}
            view={view}
            animation={{
                open: 'modal-open',
                close: 'modal-close'
            }}
        >
            <div className="relative bg-color p-5 w-3/12 px-7 h-4/12 rounded-md flex flex-col -translate-y-1/4" onClick={stopPropagation}>
                <ModalCross fn={swap} />
                <AddCharaterForm>
                    <><Button fn={swap} variant='ghost'><p>Отмена</p></Button>
                        <Button variant='acceess' type='submit' ><p>Добавить</p></Button></>
                </AddCharaterForm>
            </div>
        </Modal>
    )
}