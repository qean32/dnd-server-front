import React from 'react'
import { cn } from '../../lib/function'

interface Props {
    className?: string
    fn: () => {}
    path: string
}


export const Component: React.FC<Props> = ({ className, fn, path }: Props) => {
    return (
        <button className={cn("p-2.5 flex justify-center items-center cursor-pointer", className)} onClick={fn}>
            <img className="icon-sm" src={path} alt="" />
        </button>
    )
}
