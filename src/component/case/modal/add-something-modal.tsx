import React from 'react'
import { stopPropagation } from '@/lib/function'
import { Modal } from '@component/master/h-order-component'
import { ModalCross } from '@component/ui'
import { FilterAddSomething, GroupTokenInModal } from '@component/shared'
import { propsComponent } from '@/model'
import { useBoolean } from '@/lib/castom-hook'

interface Props {
    view: boolean
    swap: React.MouseEventHandler<HTMLDivElement | HTMLButtonElement>
    component: propsComponent
    accept: propsComponent
}


export const AddSomething: React.FC<Props> = ({ view, swap, component, accept: Accept }: Props) => {
    const part = useBoolean()

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
                <div className="w-9/12 h-full overflow-scroll relative">
                    <FilterAddSomething />
                    <GroupTokenInModal title='Базовый набор' component={component} />
                    <GroupTokenInModal title='Набор Хелойвин' component={component} />
                </div>
                <Accept part={part}
                    swapModal={swap}
                />
            </div>
        </Modal>
    )
}
