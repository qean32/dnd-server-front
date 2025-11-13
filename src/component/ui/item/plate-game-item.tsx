import React from 'react'
import { cn } from '@lib/function'

interface Props {
    path: string
    value: string
}


export const PlateGameItem: React.FC<Props> = ({ path, value }: Props) => {
    return (
        <div
            value={path}
            className={cn('bg-img bg-shadow rounded-sm overflow-hidden w-1/8 min-w-[150px] h-[85px] cursor-pointer hover:border-1', (path == value && 'border-1'))}
            style={{ transformOrigin: 'bottom', backgroundImage: `url(${`${path}`})` }}>
        </div>
    )
}
