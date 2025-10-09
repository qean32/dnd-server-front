import React from 'react'
import { useBoolean } from '../../lib/castom-hook'
import { cn } from '../../lib/function'

interface Props {
}


export const AuthBG: React.FC<Props> = ({ }: Props) => {
    const { boolean, swap } = useBoolean(true)

    return (
        <div className={cn("h-full w-1/2 top-0 absolute transition07", (!boolean && 'translate-x-full'))} onClick={swap}>
            <div className="h-full items-center cursor-pointer flex justify-center">
                <img src="/img/auth-bg.jpg" alt="" style={{ filter: 'brightness(30%)' }} className="rounded-md h-full w-full" />
                <p className="absolute text-3xl">{!boolean ? 'ВХОД' : 'РЕГИСТРАЦИЯ'}</p>
            </div>
        </div>
    )
}
