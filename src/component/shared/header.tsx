import React from 'react'
import { cn } from '@lib/function'
import { Ava, IsOnline, Logo } from '@component/ui'
import { Link } from 'react-router-dom'

interface Props {
    className?: string
}


export const Header: React.FC<Props> = ({ className }: Props) => {
    return (
        <header className={cn('bg-color-darkness z-50 sticky flex justify-around py-2.5 items-center', className)}>
            <div className="absolute right-3 top-5"><IsOnline /></div>
            <div className='flex gap-2'>
                <p className='cursor-pointer'>Форум</p>
                <p className='cursor-pointer'>Библиотека</p>
            </div>
            <Logo />
            <Link className='flex gap-4 items-center' to='/auth'>
                <p className='cursor-pointer'>Профиль</p>
                <Ava path={''} size='ava-sm' />
            </Link>
        </header>
    )
}
