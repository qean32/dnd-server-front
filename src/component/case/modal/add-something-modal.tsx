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
    renderItem(item: any): React.ReactNode
    accept: propsComponent
}


export const AddSomething: React.FC<Props> = ({ view, swap, renderItem, accept: Accept }: Props) => {
    const part = useBoolean(true)

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
                    <GroupTokenInModal title='Базовый набор' renderItem={renderItem} />
                    <GroupTokenInModal title='Набор Хелойвин' renderItem={renderItem} />
                </div>
                <Accept part={part}
                    swapModal={swap}
                />
            </div>
        </Modal>
    )
}
