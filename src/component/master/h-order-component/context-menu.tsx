import React from 'react'
import { cn, stopPropagation } from '@/lib/function'
import { useBoolean } from '@/lib/castom-hook'

interface Props {
    className?: string
    children: React.ReactNode
}


export const ContextMenu: React.FC<Props> = ({
    className,
    children
}: Props) => {
    const { boolean, swap } = useBoolean()

    return (
        <>
            <div className={cn("relative p-2 white-opacity rounded-full cursor-pointer transition-300 w-fit h-fit", className)} onClick={(e) => { stopPropagation(e); swap() }}>
                <img className="icon-sm" src='/icon/menu.svg' />
            </div>
            {boolean &&
                <>
                    <div className="absolute bottom-4 right-3 translate-y-full z-50 bg-color py-2 rounded-sm cursor-pointer min-w-[120px]">
                        <div className="flex flex-col items-end w-full">
                            <div className='flex flex-col children-font-sm text-end w-full'>
                                {children}
                            </div>
                        </div>
                    </div>
                </>
            }
        </>
    )
}
