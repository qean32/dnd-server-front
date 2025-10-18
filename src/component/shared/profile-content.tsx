import React from 'react'
import { LinkPrime, PostItem } from '../ui'
import { useAppSelector } from '../../lib/castom-hook/redux'
import { cn } from '../../lib/function'
import { fakePost } from '../../fake-data'

interface Props {
}


export const ProfileContent: React.FC<Props> = ({ }: Props) => {
    const { type } = useAppSelector(state => state.profileContent)

    return (
        <div className={cn("flex-1 flex w-[300%] transition07", (type == 'character' && '-translate-x-1/3'), type == 'game' && '-translate-x-2/3')}>
            <div className="w-1/3 min-h-full">
                {fakePost.slice(0, 6).map(item => {
                    return <PostItem {...item} key={item.title} />
                })}
            </div>
            <div className="w-1/3 min-h-full flex flex-col gap-2 pt-5">
                {fakePost.slice(0, 6).map(() =>
                    <LinkPrime link='https://aternia.games/i/dnd/character_sheet/show/10399ffb-e071-4c6d-b7f2-3f4fcee3fab0' />
                )}
            </div>
            <div className="w-1/3 min-h-full">
                <p>игры</p>
            </div>
        </div>
    )
}
