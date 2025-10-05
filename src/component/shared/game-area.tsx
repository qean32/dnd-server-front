import React from 'react'
import { cn } from '../../lib/function'
import { useDraggable } from '../../lib/castom-hook'

interface Props {
    className?: string
    children: React.ReactNode
}


export const GameArea: React.FC<Props> = ({ className, children }: Props) => {
    const { dragEndHandler, ref } = useDraggable()

    return (
        <div
            draggable
            ref={ref}
            style={{ backgroundImage: 'url(/img/bg-f.jpg)', top: 200, left: 200 }}
            className={cn('w-[1600px] h-[750px] z-0 transition03 rounded-lg fixed overflow-hidden bg-color-dark cursor-pointer top-1/5 left-1/4', className)}
            onDragEnd={dragEndHandler}
        >
            <div className="area w-full h-full" style={{ scale: '1.005' }}>
                {children}
            </div>
        </div>
    )
}
