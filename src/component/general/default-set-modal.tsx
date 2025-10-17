import React from 'react'
import { cn } from '../../lib/function'
import { useMount } from '../../lib/castom-hook'
import { Portal } from './portal'

interface Props {
    className?: string
    children: React.ReactNode
    view: boolean
    swap: React.MouseEventHandler<HTMLDivElement>
    animation: {
        open: 'right-modal-open' | 'modal-open'
        close: 'right-modal-close' | 'modal-close'
    }
}


export const DefaultSetModal: React.FC<Props> = ({ className, children, view, animation: { close, open }, swap }: Props) => {
    const dispay = useMount(view)
    if (!dispay) {
        return null
    }

    return (
        <Portal>
            <div className={cn("shadow", !view && 'shadow-close')} onClick={swap}>
                <div className={cn('flex w-full h-full justify-center items-center', (view ? open : close), className)}>
                    {children}
                </div>
            </div>
        </Portal>
    )
}