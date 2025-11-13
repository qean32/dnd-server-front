import React from 'react'
import { cn } from '../../../lib/function'

interface Props {
    path: string
    value: string
}


export const ViewImgCarouselItem: React.FC<Props> = ({ path, value }: Props) => {
    return (
        <img
            value={path}
            src={path} alt=""
            className={cn('cursor-pointer h-full rounded-sm', (path == value && 'border-1'))} />
    )
}
