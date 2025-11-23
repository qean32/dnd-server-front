import React from 'react'
import { cn } from '@lib/function'

interface Props {
    className?: string
    children: React.ReactNode
    text: string
    position?: string
}


export const HoverHint: React.FC<Props> = ({ className, children, text, position = '-top-12 left-0 -translate-x-[50%]' }: Props) => {
    return (
        <div className={cn('w-fit h-fit hover-hint', className)}>
            {children}
            <div
                className={cn("warning-hint p-2 px-4 rounded-sm bg-color-dark absolute outline-bg-light opacity-0 pointer-events-none transition-03 text-nowrap", position)}>
                {text}
            </div>
        </div>
    )
}
