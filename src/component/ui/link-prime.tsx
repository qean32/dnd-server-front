import React from 'react'
import { cn } from '../../lib/function'

interface Props {
    className?: string
    link: string
    number: number
}


export const LinkPrime: React.FC<Props> = ({ className, link, number }: Props) => {
    return (
        <div className={cn('bg-color-dark rounded-sm overflow-hidden', className)}>
            <a href={link} className='prime-hover text-2xl py-2 px-5' target='_blank' >
                <div className='flex gap-4'>
                    <p>{number}</p>
                    <p>{link}</p>
                </div>
            </a>
        </div>
    )
}
