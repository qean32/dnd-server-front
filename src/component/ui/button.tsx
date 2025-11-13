import React from 'react'
import { cn } from '@lib/function'

interface Props {
    className?: string
    children: React.ReactNode
    variant?: 'default' | 'acceess' | 'reject' | 'ghost' | 'plus'
    fn?: React.MouseEventHandler<HTMLButtonElement>
}

const map = new Map([
    ["default", 'bg-color-dark bg-color-darkness-hover'],
    ["ghost", 'hover:underline'],
    ["acceess", 'bg-green-800 hover:bg-green-900'],
    ["reject", 'bg-red-800 hover:bg-red-900'],
])


export const Button: React.FC<Props> = ({ className = 'w-fit', children, variant = 'default', fn = () => { } }: Props) => {
    return (
        <button onClick={fn} className={cn('transition-03 rounded-md cursor-pointer px-3 py-2', className, map.get(variant))}>
            {children}
        </button>
    )
}
