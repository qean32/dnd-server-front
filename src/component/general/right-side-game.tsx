import React from 'react'
import { cn } from '../../lib/function'
import { Select } from '../ui'

interface Props {
    className?: string
}


export const RightSideGame: React.FC<Props> = ({ className }: Props) => {
    return (
        <div className={cn('fixed w-[15%] h-[100%] bg-color-dark', className)}>
            <Select options={[]} />
        </div>
    )
}
