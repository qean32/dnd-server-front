import React from 'react'
import { useBoolean } from '../../lib/castom-hook'
import { cn } from '../../lib/function'

interface Props {
    text?: string
}


export const AuthBG: React.FC<Props> = ({ text }: Props) => {
    const { boolean, swap } = useBoolean(false)

    return (
        <div className={cn("h-full z-40 w-1/2 top-0 absolute transition-07", (!boolean && 'translate-x-full'))} onClick={() => !text && swap()}>
            <div className="h-full items-center cursor-pointer flex justify-center">
                <img src="/img/auth-bg.jpg" alt="" className="rounded-md h-full w-full bg-shadow" />
                <p className="absolute text-3xl">{!boolean ? text ? text : 'ВХОД' : 'РЕГИСТРАЦИЯ'}</p>
            </div>
        </div>
    )
}
