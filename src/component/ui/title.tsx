import React from 'react'
import { cn } from '../../lib/function'

interface Props {
    className?: string
    children: React.ReactNode
}


export const Title: React.FC<Props> = ({ className, children }: Props) => {
    return (
        <p className={cn('text-2xl my-2', className)}>
            {children}
        </p>
    )
}
