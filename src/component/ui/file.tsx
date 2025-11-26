import React from 'react'
import { cn } from '@lib/function'

interface Props {
    className?: string
    link: string
}


export const File: React.FC<Props> = ({ className, link }: Props) => {
    return (
        <a className={cn(className, 'py-2 rounded-sm')} target='_blank' href={link}>
            <p className='underline cursor-pointer fit-content'>{link}</p>
        </a>
    )
}
