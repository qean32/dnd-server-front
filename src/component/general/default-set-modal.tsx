import React from 'react'
import { cn } from '../../lib/function'
import { useBoolean } from '../../lib/castom-hook'
import { createPortal } from 'react-dom'

interface Props {
    className?: string
    className_: string
    children: React.ReactNode
    view: boolean
    animation: {
        open: string
        close: string
    }
}


export const DefaultSetModal: React.FC<Props> = ({ className, children, view, animation: { close, open }, className_ = '-translate-y-1/2' }: Props) => {
    const { boolean: display, off } = useBoolean(true)

    React.useEffect(() => {
        if (!view) {
            setTimeout(() => off(), 700)
        }
    }, [view])
    return (
        <>
            {display ?
                createPortal(
                    <div className={cn("shadow", !view && 'shadow-close')}>
                        <div className={cn('flex w-full h-full justify-center items-center', (view ? open : close), className)}>
                            <div className={cn("", className_)}>
                                {children}
                            </div>
                        </div>
                    </div>
                    , document.body)
                :
                null
            }
        </>
    )
}