import React from 'react'
import { cn } from '../../lib/function'

interface Props {
    className?: string
    children: React.ReactNode
    variant?: 'bg-color-darkness bg-color-dark-hover' | 'bg-color-dark btn-hover-outline'
}


export const Button: React.FC<Props> = ({ className = 'px-3 w-fit', children, variant = 'bg-color-darkness bg-color-dark-hover' }: Props) => {
    return (
        <button className={cn('flex gap-2 p-3 transition03 rounded-sm cursor-pointer justify-center items-center transition03', className, variant)}>
            {children}
        </button>
    )
}
