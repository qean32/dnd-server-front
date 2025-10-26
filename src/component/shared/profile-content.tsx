import React from 'react'
import { CharacterLinkItem, ForumColumn, GameItem, PlusButton, PostItem } from '../ui'
import { useAppSelector } from '../../lib/castom-hook/redux'
import { cn } from '../../lib/function'
import { fakePost } from '../../fake-data'
import { Modal } from '../children/modal'
import { useBoolean } from '../../lib/castom-hook'
import { Link } from 'react-router-dom'

interface Props {
}

const classParent = "w-1/3 min-h-full flex flex-col gap-2 bg-color-dark rounded-md"
export const ProfileContent: React.FC<Props> = ({ }: Props) => {
    const { type } = useAppSelector(state => state.profileContent)

    return (
        <div className={cn("flex-1 flex w-[300%] pl-1 gap-1 transition-07", (type == 'character' && '-translate-x-1/3'), type == 'game' && '-translate-x-2/3')}>
            <div className={classParent}>{type == 'post' && <PostContent />}</div>
            <div className={classParent}>{type == 'character' && <CharacterContent />}</div>
            <div className={classParent}>{type == 'game' && <GameContent />}</div>
        </div >
    )
}

const PostContent: React.FC<{}> = ({ }: {}) => {

    return (
        <div className='px-5 pt-2 pb-5'>
            <ForumColumn />
            {fakePost.slice(0, 6).map(item => {
                return <PostItem {...item} key={item.title} />
            })}
            <Link to={'/create-post'}><PlusButton className='h-[100px] w-full mt-2 px-5' iconSize='icon-sm' /></Link>
        </div>
    )
}

const CharacterContent: React.FC<{}> = ({ }: {}) => {
    const { boolean, swap } = useBoolean()

    return (
        <div className='flex gap-5 flex-wrap p-5 rounded-md'>
            {fakePost.slice(0, 6).map((__, _) =>
                <CharacterLinkItem link='https://aternia.games/i/dnd/character_sheet/show/10399ffb-e071-4c6d-b7f2-3f4fcee3fab0' key={_} number={_ + 1} name='Клиган Клиган' />
            )}
            <Modal.AddCharacter swap={swap} view={boolean} />
            <div className="h-full items-center flex">
                <PlusButton fn={swap} className='h-[85px] px-5' iconSize='icon-sm' />
            </div>
        </div>
    )
}

const GameContent: React.FC<{}> = ({ }: {}) => {
    const { boolean, swap } = useBoolean()
    return (
        <div className='flex gap-5 flex-wrap p-5 rounded-md'>
            {fakePost.slice(0, 7).map((__, _) =>
                <GameItem key={_} id={_ + 1} name={'Первая'} />
            )}
            <Modal.AddGame swap={swap} view={boolean} />
            <PlusButton fn={swap} className='h-[85px] px-5' iconSize='icon-sm' />
        </div>
    )
}