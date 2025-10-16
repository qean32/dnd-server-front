import React from 'react'
import { cn } from '../../lib/function'

interface Props {
    className?: string
    children: React.ReactNode
}


export const Button: React.FC<Props> = ({ className = 'px-3 w-fit', children }: Props) => {
    return (
        <button className={cn('flex gap-2 bg-color-darkness p-2 rounded-sm cursor-pointer justify-center items-center transition03', className)}>
            {children}
        </button>
    )
}
