import React from 'react'
import { cn } from '../../lib/function'

interface Props {
    className?: string
    fn: React.MouseEventHandler<HTMLButtonElement>
    path: string
}


export const ButtonInGroup: React.FC<Props> = ({ className, fn, path }: Props) => {
    return (
        <button className={cn("p-2.5 btn-in-group flex justify-center items-center cursor-pointer", className)} onClick={fn}>
            <img className="icon-sm" src={path} alt="" />
        </button>
    )
}
