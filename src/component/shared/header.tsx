import React from 'react'
import { cn } from '../../lib/function'
import { Ava, Logo } from '../ui'

interface Props {
    className?: string
}


export const Header: React.FC<Props> = ({ className }: Props) => {
    return (
        <div className={cn('bg-color-darkness flex justify-around py-2 items-center', className)}>
            <div className='flex gap-2'>
                <p>Форум</p>
                <p>Библиотека</p>
            </div>
            <Logo />
            <div className='flex gap-2'>
                <Ava path={''} size='ava-sm' />
                <p>Профиль</p>
            </div>
        </div>
    )
}
