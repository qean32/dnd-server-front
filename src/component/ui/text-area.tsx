import React from 'react'
import { cn } from '../../lib/function'

interface Props {
    className?: string
    title: string
    ref?: React.RefObject<HTMLDivElement> | null
    children?: React.ReactNode
}


export const TextArea: React.FC<Props> = ({ className, title, ref, children }: Props) => {
    return (
        <div contentEditable
            ref={ref}
            // @ts-ignore
            placeholder={title}
            className={cn("outline-0 bg-color-dark w-full rounded-md", className)}>
            {children}
        </div>
    )
}
