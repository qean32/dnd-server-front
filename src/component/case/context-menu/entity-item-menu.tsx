import React from 'react'
import { ContextMenu } from '@component/master/h-order-component'
import { ContextMenuItem } from './context-menu-item'

interface Props {
}


export const EntityItemMenu: React.FC<Props> = ({ }: Props) => {
    return (
        <ContextMenu>
            <p className='bg-yellow-800 mx-3'>30</p>
            <ContextMenuItem fn={() => { }}>Добавить статус</ContextMenuItem>
        </ContextMenu>
    )
}
