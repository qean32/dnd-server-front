import React from 'react'
import { cn } from '@lib/function'

interface Props {
    className?: string
    fn?: React.MouseEventHandler<HTMLButtonElement>
    children: React.ReactNode
}


export const ButtonInGroup: React.FC<Props> = ({ className, fn = () => { }, children }: Props) => {
    return (
        <button className={cn("p-3 btn-in-group transition-300 flex justify-center items-center cursor-pointer", className)} onClick={fn}>
            {children}
        </button>
    )
}
