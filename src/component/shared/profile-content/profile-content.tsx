import React from 'react'
import { useAppSelector } from '../../../lib/castom-hook/redux'
import { cn } from '../../../lib/function'
import { Posts } from './posts'
import { Characters } from './characters'
import { Games } from './games'

interface Props {
}

const classParent = "w-1/3 min-h-full flex flex-col gap-2 bg-color-dark rounded-md"
export const ProfileContent: React.FC<Props> = ({ }: Props) => {
    const { type } = useAppSelector(state => state.profileContent)

    return (
        <div className={cn("flex-1 flex w-[300%] pl-1 gap-1 transition-07", (type == 'character' && '-translate-x-1/3'), type == 'game' && '-translate-x-2/3')}>
            <div className={classParent}>
                {type == 'post' && <Posts />}</div>
            <div className={classParent}>
                {type == 'character' && <Characters />}</div>
            <div className={classParent}>
                {type == 'game' && <Games />}</div>
        </div >
    )
}