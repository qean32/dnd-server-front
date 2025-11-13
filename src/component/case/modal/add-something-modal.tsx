import React from 'react'
import { stopPropagation } from '@/lib/function'
import { Modal } from '@component/master/h-order-component'
import { Button, ModalCross } from '@component/ui'
import { FilterAddSomething, GroupTokenInModal } from '@component/shared'
import { propsComponent } from '@/model'

interface Props {
    view: boolean
    swap: React.MouseEventHandler<HTMLDivElement | HTMLButtonElement>
    component: propsComponent
    accept: propsComponent
}


export const AddSomething: React.FC<Props> = ({ view, swap, component, accept: Accept }: Props) => {
    return (
        <Modal
            swap={swap}
            view={view}
            animation={{
                open: 'modal-open',
                close: 'modal-close'
            }}
        >
            <div className="relative bg-color w-8/12 h-9/12 rounded-md flex overflow-hidden" onClick={stopPropagation}>
                <ModalCross fn={swap} />
                <div className="pt-2 w-9/12 h-full overflow-scroll relative">
                    <FilterAddSomething />
                    <GroupTokenInModal title='Базовый набор' component={component} />
                    <GroupTokenInModal title='Набор Хелойвин' component={component} />
                </div>
                <Accept children={<div className="flex gap-2">
                    <Button fn={swap} variant='ghost'><p>Отмена</p></Button>
                    <Button variant='acceess'><p>Добавить</p></Button></div>} />
            </div>
        </Modal>
    )
}
