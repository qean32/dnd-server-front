import React from 'react'
import { cn } from '@/lib/function'
import { useMount } from '@/lib/castom-hook'

interface Props {
    className?: string
    children: React.ReactNode
    view: boolean
}


export const Toast: React.FC<Props> = ({ className, children, view }: Props) => {
    const display = useMount(view, 1000)

    if (!display) {
        return null
    }
    return (
        <div className={cn('outline-bg-light w-fit absolute rounded-md overflow-hidden bg-color-darkness mt-2 left-1/2 -translate-x-1/2', className, (view ? 'toast-open' : 'toast-close'))}>
            {children}
        </div>
    )
}
