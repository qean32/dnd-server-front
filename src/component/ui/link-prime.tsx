import React from 'react'
import { cn } from '../../lib/function'

interface Props {
    className?: string
    link: string
}


export const LinkPrime: React.FC<Props> = ({ className, link }: Props) => {
    return (
        <div className={cn('bg-color-dark rounded-sm overflow-hidden', className)}>
            <a href={link} className='prime-hover text-2xl py-2 px-5' target='_blank' >
                {link}
            </a>
        </div>
    )
}
