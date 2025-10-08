import React from 'react'
import { cn } from '../../../lib/function'

interface Props {
    className?: string
    children: React.ReactNode
}


export const Toast: React.FC<Props> = ({ className, children }: Props) => {
    return (
        <div className={cn('fit-content rounded-md overflow-hidden mt-2', className)}>
            {children}
        </div>
    )
}
