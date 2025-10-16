import React from 'react'
import { cn } from '../../lib/function'

interface Props {
    children: React.ReactNode
    className?: string
    size?: 'w-[45%]' | 'w-[50%]' | 'w-[60%]' | 'w-[70%]' | 'w-[75%]'
}


export const DefaultSetPage: React.FC<Props> = ({ children, className, size = 'w-[60%]' }: Props) => {
    return (
        <main className={cn("w-full h-full py-4 flex justify-center items-start", className)}>
            <div className={cn("h-full", size)}>
                {children}
            </div>
        </main >
    )
}
