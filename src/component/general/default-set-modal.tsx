import React from 'react'
import { cn } from '../../lib/function'
import { useBoolean } from '../../lib/castom-hook'

interface Props {
    className?: string
    children: React.ReactNode
    view: boolean
}


export const DefaultSetModal: React.FC<Props> = ({ className, children, view }: Props) => {
    const { boolean: display, off } = useBoolean(true)

    React.useEffect(() => {
        if (!view) {
            setTimeout(() => off(), 700)
        }
    }, [view])
    return (
        <>
            {display ?
                <div className={cn("shadow", !view && 'shadow-close')}>
                    <div className={cn('flex w-full h-full justify-center items-center', (view ? 'modal-open' : 'modal-close'), className)}>
                        <div className="-translate-y-1/2">
                            {children}
                        </div>
                    </div>
                </div>
                :
                null
            }
        </>
    )
}