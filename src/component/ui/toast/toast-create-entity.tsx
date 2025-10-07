import React from 'react'
import { cn } from '../../../lib/function'
import { Toast } from './toast-hoc'

interface Props {
    className?: string
    name: string
}


export const ToastCreateEntity: React.FC<Props> = ({ className, name }: Props) => {
    return (
        <Toast>
            <div className={cn("py-2 px-3 bg-color-dark flex gap-2 items-center", className)}>
                <img src="/icon/dragon.svg" className='icon-sm' alt="" />
                <p>добавлен {name}</p>
            </div>
        </Toast>
    )
}
