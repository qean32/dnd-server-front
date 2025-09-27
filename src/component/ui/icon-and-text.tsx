import React from 'react'
import { cn } from '../../lib/function'

interface Props {
    className?: string
    icon: React.ReactNode
    title: string
}


export const IconAndText: React.FC<Props> = ({ className, icon, title }: Props) => {
    return (
        <div className={cn('flex gap-2', className)}>
            {icon}
            <p>{title}</p>
        </div>
    )
}
