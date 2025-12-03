import React from 'react'
import { ContextMenu } from '@component/master/h-order-component'
import { ContextMenuItem } from './context-menu-item'

interface Props {
    id: number
}


export const EntityItemMenu: React.FC<Props> = ({ id }: Props) => {
    console.log(id);

    return (
        <ContextMenu className='z-20'>
            <p className='bg-yellow-800 mx-3 mb-1'>30</p>
            <ContextMenuItem fn={() => { }}>Добавить статус</ContextMenuItem>
            <ContextMenuItem fn={() => { }}>Удалить</ContextMenuItem>
            <ContextMenuItem fn={() => { }}>Подробнее</ContextMenuItem>
        </ContextMenu>
    )
}
