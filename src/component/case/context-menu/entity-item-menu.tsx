import React from 'react'
import { ContextMenu } from '@component/master/h-order-component'
import { ContextMenuItem } from './context-menu-item'

interface Props {
}


export const EntityItemMenu: React.FC<Props> = ({ }: Props) => {
    return (
        <ContextMenu>
            <div className="absolute -bottom-1 right-3 translate-y-full z-20 bg-color p-3 px-0 rounded-sm cursor-pointer">
                <div className="flex flex-col items-end">
                    <div className='flex flex-col children-font-sm text-end gap-2'>
                        <p className='bg-yellow-800 mx-3'>30</p>
                        <ContextMenuItem fn={() => { }}>Добавить статус</ContextMenuItem>
                    </div>
                </div>
            </div>
        </ContextMenu>
    )
}
