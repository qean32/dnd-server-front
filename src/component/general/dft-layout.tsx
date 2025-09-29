import React from 'react'
import { cn } from '../../lib/function'

interface Props {
    children: React.ReactNode
    className?: string
}


export const DftLayout: React.FC<Props> = ({ children, className }: Props) => {
    return (
        <main className={cn("w-[100%] py-4 flex justify-center items-center", className)}>
            <div className="w-[60%]">
                {children}
            </div>
        </main >
    )
}
