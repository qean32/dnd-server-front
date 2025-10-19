import React from 'react'
import { Button, LinkPrime, PostItem } from '../ui'
import { useAppSelector } from '../../lib/castom-hook/redux'
import { cn } from '../../lib/function'
import { fakePost } from '../../fake-data'
import { Link } from 'react-router-dom'

interface Props {
}


export const ProfileContent: React.FC<Props> = ({ }: Props) => {
    const { type } = useAppSelector(state => state.profileContent)

    return (
        <div className={cn("flex-1 flex w-[300%] gap-1 transition07", (type == 'character' && '-translate-x-1/3'), type == 'game' && '-translate-x-2/3')}>
            <div className="w-1/3 min-h-full">

                <Link to={'/create-post'}><Button variant='bg-color-dark btn-hover-outline' className='px-5'><p>Добавить пост</p></Button></Link>
                {fakePost.slice(0, 6).map(item => {
                    return <PostItem {...item} key={item.title} />
                })}

            </div>
            <div className="w-1/3 min-h-full flex flex-col gap-2 pt-5">

                <Button variant='bg-color-dark btn-hover-outline' className='px-5 w-fit'><p>Добавить персонажа</p></Button>
                {fakePost.slice(0, 6).map(() =>
                    <LinkPrime link='https://aternia.games/i/dnd/character_sheet/show/10399ffb-e071-4c6d-b7f2-3f4fcee3fab0' />
                )}

            </div>
            <div className="w-1/3 min-h-full">

                <Link to={'/game'}><Button variant='bg-color-dark btn-hover-outline' className='px-5'><p>Добавить персонажа</p></Button></Link>

            </div>
        </div>
    )
}
