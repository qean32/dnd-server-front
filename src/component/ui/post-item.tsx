import React from 'react'
import { Link } from 'react-router-dom'
import { postDto } from '../../model/post.dto'
import { UnwrapTags } from './unwrap-tags'


export const PostItem: React.FC<postDto> = ({ discription, tags, title, author, views }: postDto) => {
    return (
        <Link to={'/post/1'} className='link-prime'>
            <div className='py-4 grid cursor-pointer transition03 mount-opacity' style={{ gridTemplateColumns: '5fr 1fr 1fr 1fr' }}>
                <div className='flex flex-col gap-1'>
                    <p className='text-2xl'>{title}</p>
                    <p className='text-sm'>{discription}</p>
                    <UnwrapTags tags={tags} className='' />
                </div>
                <p>{author.name}</p>
                <p>Раздел</p>
                <p className='translate-x-0.5'>{views}</p>
            </div>
        </Link>
    )
}
