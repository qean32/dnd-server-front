import React from 'react'
import { cn } from '../../lib/function'
import { Ava } from '.'

interface Props {
    className?: string
}


export const UserInfo: React.FC<Props> = ({ className }: Props) => {
    return (
        <div className={cn('flex gap-6 mt-4', className)}>
            <Ava size="ava-lg" path="" className="bg-color-dark" />
            <p className="text-4xl">NICKNAME</p>
        </div>
    )
}
