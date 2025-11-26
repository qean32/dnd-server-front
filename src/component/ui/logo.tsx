import React from 'react'
import { cn } from '@lib/function'

interface Props {
    className?: string
    size?: 'icon-sm' | 'icon-md' | 'icon-lg' | 'icon-2xl' | 'icon-3xl'
}


export const Logo: React.FC<Props> = ({ className, size = 'icon-md' }: Props) => {
    return (
        <img src="/icon/logo.svg" alt="" className={cn('', className, size)} />
    )
}
