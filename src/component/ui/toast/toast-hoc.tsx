import React from 'react'
import { cn } from '../../../lib/function'
import { useBoolean } from '../../../lib/castom-hook'

interface Props {
    className?: string
    children: React.ReactNode
    view: boolean
}


export const Toast: React.FC<Props> = ({ className, children, view }: Props) => {
    const { boolean: display, off } = useBoolean(true)

    React.useEffect(() => {
        if (!view) {
            setTimeout(() => off(), 1000)
        }
    }, [view])
    return (
        <>
            {display ?
                <div className={cn('w-fit absolute rounded-md overflow-hidden mt-2 left-1/2 -translate-x-1/2', className, (view ? 'toast-open' : 'toast-close'))}>
                    {children}
                </div>
                :
                null
            }
        </>
    )
}
