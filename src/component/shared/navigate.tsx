import React from 'react'
import { cn } from '../../lib/function'
import { Link } from 'react-router-dom'
import { Button } from '../ui'

interface Props {
    className?: string
}


export const Navigate: React.FC<Props> = ({ className }: Props) => {
    return (
        <div className={cn('fixed z-20 flex gap-2 left-1/2 bottom-2 -translate-x-1/2 bg-color-dark p-2 rounded-md', className)}>
            <Link to={'/'}>
                <Button className='p-3'><img src='/icon/home.svg' /></Button>
            </Link>
            <Link to={'/forum'}>
                <Button className='p-3'><img src='/icon/news.svg' /></Button>
            </Link>
            <Link to={'/community'}>
                <Button className='p-3'><img src='/icon/community.svg' /></Button>
            </Link>
            <Link to={'/profile/1'}>
                <Button className='p-3'><img src='/icon/human.svg' /></Button>
            </Link>
            <Link to={'/game/1'}>
                <Button className='p-3'><img src='/icon/game.svg' /></Button>
            </Link>
            <Link to={'/test'}>
                <Button><p>test</p></Button>
            </Link>
        </div>
    )
}
