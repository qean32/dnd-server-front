import React from 'react'
import { cn } from '../../lib/function'
import { Tag } from './tag'

interface Props {
    className?: string
    children: React.ReactNode
}


export const GroupTag: React.FC<Props> = ({ className, children }: Props) => {
    return (
        <div className={cn('px-3 pt-1 flex gap-1', className)}>
            {children}
            <Tag tag={{ color: '', text: '+' }} />
        </div>
    )
}
