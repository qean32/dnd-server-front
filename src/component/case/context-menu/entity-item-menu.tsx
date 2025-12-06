import React from 'react'
import { ContextMenu } from '@component/master/h-order-component'
import { ContextMenuItem } from './context-menu-item'
import { useAppDispatch } from '@/lib/castom-hook/redux'
import { pushEntity, removeEntity } from '@/store/session-store'
import { entityDto } from '@/model'

interface Props extends entityDto {
}


export const EntityItemMenu: React.FC<Props> = (item: Props) => {
    const dispath = useAppDispatch()
    const removeHandler = () => dispath(removeEntity({ id: item.id }))
    const pushHandler = () => dispath(pushEntity(item))

    return (
        <ContextMenu className='z-20'>
            <p className='bg-yellow-800 mx-3 mb-1'>30</p>
            <ContextMenuItem fn={() => { }}>Добавить статус</ContextMenuItem>
            <ContextMenuItem fn={removeHandler}>Удалить</ContextMenuItem>
            <ContextMenuItem fn={pushHandler}>Добавить</ContextMenuItem>
            <ContextMenuItem fn={() => { }}>Подробнее</ContextMenuItem>
        </ContextMenu>
    )
}
