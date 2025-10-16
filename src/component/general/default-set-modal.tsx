import React from 'react'
import { cn } from '../../lib/function'
import { useBoolean } from '../../lib/castom-hook'
import { createPortal } from 'react-dom'

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
    const { boolean: display, on } = useBoolean(true)
    const { boolean: display_, off: off_ } = useBoolean()

    React.useEffect(() => { view && on() }, [view])

    React.useEffect(() => {
        console.log(display, display_)
        if (!display) {
            setTimeout(() => off_(), 700)
        }
    }, [display])
    return (
        <>
            {display_ ?
                createPortal(
                    <div className={cn("shadow", !display && 'shadow-close')} onClick={swap}>
                        <div className={cn('flex w-full h-full justify-center items-center', (display ? open : close), className)}>
                            {children}
                        </div>
                    </div>
                    , document.body)
                :
                null
            }
        </>
    )
}