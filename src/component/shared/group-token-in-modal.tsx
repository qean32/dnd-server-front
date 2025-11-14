import React from 'react'
import { Title } from '@component/ui'
import { entityDto, propsComponent } from '@/model'
import { cn, getHTMLData } from '@/lib/function'
import { useAppDispatch } from '@/lib/castom-hook/redux'
import { swapObjectBeingAddedToGame } from '@/store/object-being-added-to-game-store'

interface Props {
    title: string
    component: propsComponent
    array?: entityDto[]
}


export const GroupTokenInModal: React.FC<Props> = ({ title, component: Component }: Props) => {
    const dispath = useAppDispatch()
    const clickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        dispath(swapObjectBeingAddedToGame({ object: getHTMLData(e, 'data', true) }))
    }

    return (
        <div className="ml-5 rounded-sm pb-2 pt-2">
            <Title className='pb-2 pl-3'>{title}</Title>
            <div className={cn('grid gap-y-2 grid-cols-4 adaptive2k-grid-column-7')} onClick={clickHandler}>
                <Component />
                <Component />
                <Component />
                <Component />
                <Component />
                <Component />
                <Component />
                <Component />
                <Component />
            </div>
        </div>
    )
}
