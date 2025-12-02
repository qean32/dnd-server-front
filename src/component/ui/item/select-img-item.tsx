import React from 'react'
import { cn } from '@lib/function'

interface Props {
    path: string
    value: string
    className: string
}


export const SelectImgItem: React.FC<Props> = ({ path, value, className }: Props) => {
    return (
        <div
            value={path}
            className={cn(
                'bg-img bg-shadow rounded-sm overflow-hidden cursor-pointer hover:border-1',
                className,
                (path == value && 'border-1')
            )}
            style={{ transformOrigin: 'bottom', backgroundImage: `url(${`${path}`})` }}>
        </div>
    )
}
