import React from 'react'
import { cn } from '../../lib/function'

interface Props {
    className?: string
    title: string
    view: boolean
}


export const NoFindData: React.FC<Props> = ({ className, title, view }: Props) => {
    if (!view) {
        return null
    }

    return (
        <div className={cn("flex-1 flex justify-center items-center flex-col gap-5", className)}>
            <img src='/icon/no-find-data.svg' className='icon-4xl' />
            <p className='text-sm'>{title}</p>
        </div>
    )
}
