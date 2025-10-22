import React from 'react'
import { Button, LinkPrime, PostItem, TextInput } from '../ui'
import { useAppSelector } from '../../lib/castom-hook/redux'
import { cn } from '../../lib/function'
import { fakePost } from '../../fake-data'
import { useBoolean } from '../../lib/castom-hook'

interface Props {
}

const classParent = "w-1/3 min-h-full flex flex-col gap-2 pt-5"
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
        <>
            {fakePost.slice(0, 6).map(item => {
                return <PostItem {...item} key={item.title} />
            })}
        </>
    )
}

const CharacterContent: React.FC<{}> = ({ }: {}) => {
    const { boolean, swap } = useBoolean()

    return (
        <>
            {fakePost.slice(0, 6).map((__, _) =>
                <LinkPrime link='https://aternia.games/i/dnd/character_sheet/show/10399ffb-e071-4c6d-b7f2-3f4fcee3fab0' key={_} number={_ + 1} />
            )}
            {!boolean && <Button variant='acceess' className='p-1 w-fit px-3' fn={swap}><p>+</p></Button>}
            {boolean &&
                <div className="mount-opacity flex items-end gap-2">
                    <TextInput placeHolder='ссылка' />
                    <Button variant='acceess' fn={swap} className='py-2.5 px-4  h-full'><p className='text-nowrap'>Добавить персонажа</p></Button>
                </div>
            }
        </>
    )
}

const GameContent: React.FC<{}> = ({ }: {}) => {
    return (
        <>
        </>
    )
}