import React from 'react'
import { ContextMenu } from '@component/master/h-order-component'
import { ContextMenuItem } from './context-menu-item'
import { useAppDispatch } from '@/lib/castom-hook/redux'
import { pushEntity, removeEntity } from '@/store/session-store'
import { entityDto } from '@/model'
import { Initiative } from '@/component/ui'
import { swapTmpEntity } from '@/store/temp-entity'

interface Props extends entityDto {
}


export const EntityItemMenu: React.FC<Props> = (item: Props) => {
    const dispath = useAppDispatch()
    const removeHandler = () => dispath(removeEntity({ id: item.id }))
    const pushHandler = () => dispath(pushEntity(item))
    const moreHandler = () => dispath(swapTmpEntity({ id: item.id }))

    return (
        <ContextMenu className='z-20'>
            <Initiative title={30} className='mx-3' />
            <ContextMenuItem fn={() => { }}>Добавить статус</ContextMenuItem>
            <ContextMenuItem fn={removeHandler}>Удалить</ContextMenuItem>
            <ContextMenuItem fn={pushHandler}>Добавить</ContextMenuItem>
            <ContextMenuItem fn={moreHandler}>Подробнее</ContextMenuItem>
        </ContextMenu>
    )
}
