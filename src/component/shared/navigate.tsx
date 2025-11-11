import React from 'react'
import { cn } from '../../lib/function'
import { NavigateButton } from '../ui'

interface Props {
    className?: string
}


export const Navigate: React.FC<Props> = ({ className }: Props) => {
    return (
        <div className={cn('fixed z-50 flex opacity-70 hover:opacity-100 gap-2 left-1/2 bottom-2 -translate-x-1/2 bg-color-darkness p-2 rounded-md transition-03 hover:py-3', className)}>
            <NavigateButton link='/' path='/icon/home.svg' />
            <NavigateButton link='/forum' path='/icon/news.svg' />
            <NavigateButton link='/community' path='/icon/community.svg' />
            <NavigateButton link='/profile/1' path='/icon/user.svg' />
            <NavigateButton link='/game/1' path='/icon/dice-6.svg' />
            <NavigateButton link='/game/1' path='/icon/game.svg' />
        </div>
    )
}
