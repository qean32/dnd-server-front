import { ContextMenu } from '@/component/master/h-order-component'
import { stopPropagation } from '@/lib/function'
import React from 'react'
import { Modal } from '../modal'
import { AccessAction } from '../modal/access-action-modal'
import { ContextMenuItem } from './context-menu-item'

interface Props {
}


export const SessionItemMenu: React.FC<Props> = ({ }: Props) => {
    return (
        <div className="absolute right-2 z-50" onClick={stopPropagation}>
            <ContextMenu>
                <div className="absolute -bottom-1 right-3 translate-y-full z-20 bg-color p-3 px-0 rounded-sm cursor-pointer">
                    <div className="flex flex-col items-end">
                        <div className='flex flex-col children-font-sm text-end gap-2'>
                            <Modal.Root modal={AccessAction} props={{ fn: () => console.log('zxc'), warning: "Вы собираетесь удалить сессию?", warningButtonText: 'Удалить сессию' }}>
                                <ContextMenuItem fn={() => { }}>Удалить</ContextMenuItem>
                            </Modal.Root>
                        </div>
                    </div>
                </div>
            </ContextMenu>
        </div>
    )
}
