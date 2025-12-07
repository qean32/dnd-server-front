import React from 'react'
import { Title } from '@component/ui'
import { cn, getHTMLData } from '@/lib/function'
import { useAppDispatch } from '@/lib/castom-hook/redux'
import { swapObjectBeingPushedToGame } from '@/store/object-being-pushed-to-game-store'

interface Props {
    renderItem(item: any): React.ReactNode
    items: any[]
}


export const GroupTokenInModal: React.FC<Props> = ({ renderItem, items }: Props) => {
    const dispath = useAppDispatch()
    const clickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        const object = getHTMLData(e, true)
        if (object) {
            dispath(swapObjectBeingPushedToGame({ object }))
        }
    }

    return (
        <div className="ml-5 rounded-sm pb-2 pt-2">
            <Title className='pb-2 pl-3'>{items[0].source.name}</Title>
            <div className={cn('grid gap-y-2 grid-cols-5 adaptive2k-grid-column-6')} onClick={clickHandler}>
                {
                    !!items.length &&
                    items.map(item => {
                        return renderItem(item)
                    })
                }
            </div>
        </div>
    )
}
