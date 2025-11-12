import React from 'react'
import { cn } from '../../../lib/function'
import { useBoolean } from '../../../lib/castom-hook'
import { useAppSelector } from '../../../lib/castom-hook/redux'
import { Arrow, SharedVariant, ShortVariant } from './'

interface Props {
    className?: string
}


export const LeftSideGame: React.FC<Props> = ({ className }: Props) => {
    const { boolean, swap } = useBoolean(false)
    const { game: { currentMap: { name }, mapsData } } = useAppSelector(state => state.game)

    return (
        <div className={cn('fixed z-10 w-[16%] h-[100%] bg-color-dark transition-07 pt-14 pb-3 flex flex-col', (!boolean && 'w-[55px]'), className)}>
            {boolean && <Arrow swap={swap} />}
            {boolean && <SharedVariant
                mapsData={mapsData} name={name} />}
            {!boolean && <ShortVariant swap={swap} />}
        </div>
    )
}
