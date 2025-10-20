import React from 'react'
import { cn } from '../../lib/function'
import { Link } from 'react-router-dom'
import { Button, NavigateButton } from '../ui'

interface Props {
    className?: string
}


export const Navigate: React.FC<Props> = ({ className }: Props) => {
    return (
        <div className={cn('fixed z-20 flex gap-2 left-1/2 bottom-2 -translate-x-1/2 bg-color-darkness p-2 rounded-md transition03 hover:pt-3', className)}>
            <NavigateButton link='/' path='/icon/home.svg' />
            <NavigateButton link='/forum' path='/icon/news.svg' />
            <NavigateButton link='/community' path='/icon/community.svg' />
            <NavigateButton link='/profile/1' path='/icon/user.svg' />
            <NavigateButton link='/game/1' path='/icon/game.svg' />
            <Link to={'/test'}>
                <Button className='h-fit py-2'><p>test</p></Button>
            </Link>
        </div>
    )
}
