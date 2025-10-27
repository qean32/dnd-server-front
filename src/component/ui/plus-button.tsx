import React from 'react'
import { Button } from '.'
import { cn } from '../../lib/function'

interface Props {
    className?: string
    iconSize?: 'icon-sm-' | 'icon-sm' | 'icon-md' | 'icon-lg'
    fn?: React.MouseEventHandler<HTMLButtonElement>
}


export const PlusButton: React.FC<Props> = ({ className, iconSize = 'icon-sm-', fn = () => { } }: Props) => {
    return (
        <Button variant='acceess' className={cn('p-2.5', className)} fn={fn}>
            <img src="/icon/plus.svg" className={iconSize} alt="" /></Button>
    )
}
