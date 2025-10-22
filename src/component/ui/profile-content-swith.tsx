import React from 'react'
import { useAppSelector } from '../../lib/castom-hook/redux'
import { useAppDispatch } from '../../store'
import { changeProfileContent } from '../../store/profile-content-store'
import { cn } from '../../lib/function'

interface Props {
}

const map = new Map([
    ['Посты', 'post'],
    ['Персонажи', 'character'],
    ['Игры', 'game']
])


export const ProfileContentSwith: React.FC<Props> = ({ }: Props) => {
    const { type } = useAppSelector(state => state.profileContent)
    const dispath = useAppDispatch()

    const swap = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        // @ts-ignore
        dispath(changeProfileContent(map.get(e.target.innerHTML)))
    }


    return (
        <div className="mt-5 flex gap-2 pt-3 pl-1 pb-2 w-[100%]" onClick={swap} >
            <p className={cn("cursor-pointer text-xl", (type == 'post' && 'font-bold'))} >Посты</p>
            <p className={cn("cursor-pointer text-xl", (type == 'character' && 'font-bold'))} >Персонажи</p>
            <p className={cn("cursor-pointer text-xl", (type == 'game' && 'font-bold'))} >Игры</p>
        </div>
    )
}
