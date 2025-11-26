import React from 'react'
import { Title } from '@component/ui'
import { cn, getHTMLData } from '@/lib/function'
import { useAppDispatch } from '@/lib/castom-hook/redux'
import { swapObjectBeingAddedToGame } from '@/store/object-being-added-to-game-store'

interface Props {
    title: string
    renderItem(item: any): React.ReactNode
    items?: any[]
}


export const GroupTokenInModal: React.FC<Props> = ({ title, renderItem }: Props) => {
    const dispath = useAppDispatch()
    const clickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        const object = getHTMLData(e, 'data', true)
        if (object) {
            dispath(swapObjectBeingAddedToGame({ object }))
        }
    }

    return (
        <div className="ml-5 rounded-sm pb-2 pt-2">
            <Title className='pb-2 pl-3'>{title}</Title>
            <div className={cn('grid gap-y-2 grid-cols-4 adaptive2k-grid-column-7')} onClick={clickHandler}>
                {renderItem({})}
                {renderItem({})}
                {renderItem({})}
                {renderItem({})}
                {renderItem({})}
                {renderItem({})}
                {renderItem({})}
                {renderItem({})}
            </div>
        </div>
    )
}
