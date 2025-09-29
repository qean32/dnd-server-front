import React from 'react'
import { cn } from '../../lib/function'

interface Props {
    className?: string
    path: string
    size?: 'ava-sm' | 'ava-md' | 'ava-lg'
}


export const Ava: React.FC<Props> = ({ className, size = 'ava-md', path }: Props) => {
    return (
        <div className={cn('bck-image bg-color rounded-sm', size, className)} style={{ backgroundImage: `url(${path})` }} ></div>
    )
}
