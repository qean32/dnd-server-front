import React from 'react'
import { cn } from '../../lib/function'

interface Props {
    className?: string
    icon: string
    count: number
}


export const IconAndNumber: React.FC<Props> = ({ className, icon, count }: Props) => {
    return (
        <div className={cn('overflow-hidden py-5 flex gap-2 h-[30px] bg-color-light-hover transition03 p-2 cursor-pointer items-center rounded-2xl', className)}>
            <img src={icon} className='icon-sm-' alt="" />
            <div>
                <p>{count}</p>
            </div>
        </div>
    )
}
