import React from 'react'
import { cn } from '../../lib/function'
import { useBoolean } from '../../lib/castom-hook'

interface Props {
    className?: string
    children: React.ReactNode
}


export const ContextMenu: React.FC<Props> = ({ className, children }: Props) => {
    const { boolean, swap } = useBoolean()

    return (
        <div className={cn("relative p-2 white-opacity rounded-full cursor-pointer transition-03 w-fit", className)} onClick={swap}>
            <img className="icon-sm" src='/icon/menu.svg' />
            {boolean &&
                <>
                    {children}
                </>
            }
        </div>
    )
}
