import React from 'react'
import { useAppSelector } from '@lib/castom-hook/redux'
import { useAppDispatch } from '@/store'
import { cn } from '@lib/function'
import { swapProfileContent } from '@/store/view-content-store'

interface Props {
}

const map = new Map([
    ['Посты', 'post'],
    ['Персонажи', 'character'],
    ['Игры', 'session']
])


export const ProfileContentSwith: React.FC<Props> = ({ }: Props) => {
    const { profile } = useAppSelector(state => state.viewContent)
    const dispath = useAppDispatch()

    const swap = (e: React.MouseEvent<HTMLDivElement>) => {
        // @ts-ignore
        if (map.get(e.target.innerHTML))
            // @ts-ignore
            dispath(swapProfileContent(map.get(e.target.innerHTML)))
    }


    return (
        <div className="mt-5 flex gap-2 pt-2 pl-1.5 pb-5 w-[100%]" onClick={swap} >
            <p className={cn("cursor-pointer text-xl", (profile == 'post' && 'font-bold'))} >Посты</p>
            <p className={cn("cursor-pointer text-xl", (profile == 'character' && 'font-bold'))} >Персонажи</p>
            <p className={cn("cursor-pointer text-xl", (profile == 'session' && 'font-bold'))} >Игры</p>
        </div>
    )
}
