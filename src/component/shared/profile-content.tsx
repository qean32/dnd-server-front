import React from 'react'
import { Button, LinkPrime, PostItem } from '../ui'
import { useAppSelector } from '../../lib/castom-hook/redux'
import { cn } from '../../lib/function'
import { fakePost } from '../../fake-data'

interface Props {
}

const classParent = "w-1/3 min-h-full flex flex-col gap-2 pt-5"
export const ProfileContent: React.FC<Props> = ({ }: Props) => {
    const { type } = useAppSelector(state => state.profileContent)

    return (
        <div className={cn("flex-1 flex w-[300%] pl-1 gap-1 transition07", (type == 'character' && '-translate-x-1/3'), type == 'game' && '-translate-x-2/3')}>
            <div className={classParent}>{type == 'post' && <PostContent />}</div>
            <div className={classParent}>{type == 'character' && <CharacterContent />}</div>
            <div className={classParent}>{type == 'game' && <GameContent />}</div>
        </div >
    )
}

const PostContent: React.FC<{}> = ({ }: {}) => {

    return (
        <>
            {fakePost.slice(0, 6).map(item => {
                return <PostItem {...item} key={item.title} />
            })}
        </>
    )
}

const CharacterContent: React.FC<{}> = ({ }: {}) => {
    return (
        <>
            {fakePost.slice(0, 6).map((__, _) =>
                <LinkPrime link='https://aternia.games/i/dnd/character_sheet/show/10399ffb-e071-4c6d-b7f2-3f4fcee3fab0' key={_} number={_ + 1} />
            )}
            <Button variant='bg-green-800 bg-green:hover'><p>добавить персонажа</p></Button>
        </>
    )
}

const GameContent: React.FC<{}> = ({ }: {}) => {
    return (
        <>
        </>
    )
}