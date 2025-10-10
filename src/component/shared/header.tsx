import React from 'react'
import { cn } from '../../lib/function'
import { Ava, Logo } from '../ui'

interface Props {
    className?: string
}


export const Header: React.FC<Props> = ({ className }: Props) => {
    return (
        <header className={cn('bg-color-darkness z-50 sticky flex justify-around py-2 items-center', className)}>
            <div className='flex gap-2'>
                <p className='cursor-pointer'>Форум</p>
                <p className='cursor-pointer'>Библиотека</p>
            </div>
            <Logo />
            <div className='flex gap-2 items-center'>
                <Ava path={''} size='ava-sm' />
                <p className='cursor-pointer'>Профиль</p>
            </div>
        </header>
    )
}
