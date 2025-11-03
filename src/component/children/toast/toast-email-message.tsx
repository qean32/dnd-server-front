import React from 'react'
import { cn } from '../../../lib/function'
import { Toast } from '../../general/hoc'

interface Props {
    className?: string
    view: boolean
}


export const ToastEmailMessage: React.FC<Props> = ({ className, view }: Props) => {
    return (
        <Toast view={view}>
            <div className={cn("py-3 px-5 flex gap-2 items-center", className)}>
                На вашу почту отправленно сообщение с инструкциями
            </div>
        </Toast>
    )
}
