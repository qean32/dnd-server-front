import React from 'react'
import { cn } from '../../../lib/function'
import { Toast } from '../../general/hoc'

interface Props {
    className?: string
    view: boolean
    path: string
    name: string
}


export const ToastEventMessage: React.FC<Props> = ({ className, view, name, path }: Props) => {
    return (
        <Toast view={view}>
            <div className={cn("py-5 px-25 bg-color-dark flex gap-2 items-center bg-img", className)} style={{ backgroundImage: `url(${path})` }}>
                <p className='text-3xl font-bold text-gray-100' style={{ letterSpacing: '5px' }}>{name}</p>
            </div>
        </Toast>
    )
}
