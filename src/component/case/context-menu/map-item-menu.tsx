import React from 'react'
import { ContextMenu } from '@component/master/h-order-component'
import { ContextMenuItem } from './context-menu-item'

interface Props {
}


export const MapItemMenu: React.FC<Props> = ({ }: Props) => {
    return (
        <ContextMenu>
            <ContextMenuItem fn={() => { }}>Удалить</ContextMenuItem>
        </ContextMenu>
    )
}
