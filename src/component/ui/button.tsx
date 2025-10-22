import React from 'react'
import { cn } from '../../lib/function'

interface Props {
    className?: string
    children: React.ReactNode
    variant?: 'default' | 'acceess' | 'reject'
    fn?: React.MouseEventHandler<HTMLButtonElement>
}

const map = new Map([
    ["default", 'bg-color-dark bg-color-darkness-hover'],
    ["acceess", 'bg-green-800 hover:bg-green-900'],
    ["reject", 'bg-red-800 hover:bg-red-900']
])


export const Button: React.FC<Props> = ({ className, children, variant = 'default', fn }: Props) => {
    return (
        <button onClick={fn ? fn : () => { }} className={cn('flex gap-2 w-fit transition-03 rounded-md cursor-pointer justify-center items-center', className, map.get(variant))}>
            {children}
        </button>
    )
}
