import React from 'react'
import { cn } from '../../lib/function'
import { Ava } from './ava'

interface Props {
    className?: string
}


export const Character: React.FC<Props> = ({ className }: Props) => {
    return (
        <div className={cn('flex items-center px-2 pr-3 py-2 cursor-pointer bg-color-hover transition03', className)}>
            <Ava path={''} size='ava-md' />
            <p className='pl-3 flex-1'>Гоблин</p>
            <div className='flex flex-col children-font-sm text-end'>
                <p className='bg-yellow-800'>30</p>
                <p>Добавить статус</p>
            </div>
        </div>
    )
}
