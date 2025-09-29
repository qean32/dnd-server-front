import React from 'react'
import { cn } from '../../lib/function'

interface Props {
    className?: string
    children: React.ReactNode
}


export const Button: React.FC<Props> = ({ className = 'w-[100%]', children }: Props) => {
    return (
        <button className={cn('flex gap-2 bg-color-dark p-2 px-3 rounded-sm cursor-pointer bg-color-darkness justify-center items-center', className)}>
            {children}
        </button>
    )
}
