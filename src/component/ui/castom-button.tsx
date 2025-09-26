import React from 'react'
import { cn } from '../../lib/function'

interface Props {
    className?: string
    icon?: React.ReactNode
    title: string
}


export const Button: React.FC<Props> = ({ className, title, icon }: Props) => {
    return (
        <button className={cn('flex gap-2 bg-color-dark pl-3 pr-5 py-1 rounded-sm cursor-pointer transition07', className)}>
            {icon}
            <p>{title}</p>
        </button>
    )
}
