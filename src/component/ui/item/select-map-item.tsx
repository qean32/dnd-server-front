import React from 'react'
import { cn } from '@lib/function'
import { mapDto } from '@/model'

interface Props {
    path: string
    data: mapDto
    value: number
}


export const SelectMapItem: React.FC<Props> = ({ path, value, data }: Props) => {
    return (
        <div
            data={JSON.stringify(data)}
            className={cn(
                'bg-img bg-shadow rounded-sm overflow-hidden cursor-pointer hover:border-1 h-[9vh]',
                (data.id == value && 'border-1')
            )}
            style={{ transformOrigin: 'bottom', backgroundImage: `url(${`${path}`})` }}>
        </div>
    )
}
