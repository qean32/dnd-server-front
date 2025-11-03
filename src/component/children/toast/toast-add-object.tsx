import React from 'react'
import { cn } from '../../../lib/function'
import { Toast } from '../../general/hoc'

interface Props {
    className?: string
    name: string
    view: boolean
}


export const ToastAddObject: React.FC<Props> = ({ className, view, name }: Props) => {
    return (
        <Toast view={view}>
            <div className={cn("py-2 px-3 bg-color-dark flex gap-2 items-center", className)}>
                <img src="/icon/dragon.svg" className='icon-sm' alt="" />
                <p>добавлен {name}</p>
            </div>
        </Toast>
    )
}
