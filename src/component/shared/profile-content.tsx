import React from 'react'
import { PostItem } from '../ui'
import { useAppSelector } from '../../lib/castom-hook/redux'
import { cn } from '../../lib/function'
import { fakePost } from '../../export'

interface Props {
}


export const ProfileContent: React.FC<Props> = ({ }: Props) => {
    const { type } = useAppSelector(state => state.profileContent)

    return (
        <div className={cn("flex-1 flex w-[300%] transition07", (type == 'character' && '-translate-x-1/3'), type == 'game' && '-translate-x-2/3')}>
            <div className="w-1/3 min-h-full">
                {fakePost.slice(0, 6).map(item => {
                    return <PostItem {...item} />
                })}
            </div>
            <div className="w-1/3 min-h-full">
                <p>Персонажи</p>
            </div>
            <div className="w-1/3 min-h-full">
                <p>игры</p>
            </div>
        </div>
    )
}
