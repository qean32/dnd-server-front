import React from 'react'
import { useAppSelector } from '../../../lib/castom-hook/redux'
import { cn } from '../../../lib/function'
import { Character, Post, Session } from '.'

interface Props {
}

const classParent = "w-1/3 min-h-full flex flex-col gap-2 bg-color-dark rounded-md"
export const ProfileContent: React.FC<Props> = ({ }: Props) => {
    const { profile } = useAppSelector(state => state.viewContent)

    return (
        <div className={cn("flex w-[300%] pl-1 gap-1 transition-07 min-h-[520px] h-fit", (profile == 'character' && '-translate-x-1/3'), profile == 'game' && '-translate-x-2/3')}>
            <div className={classParent}><Post view={profile == 'post'} /></div>
            <div className={classParent}>
                {profile == 'character' && <Character />}</div>
            <div className={classParent}>
                {profile == 'game' && <Session />}</div>
        </div >
    )
}