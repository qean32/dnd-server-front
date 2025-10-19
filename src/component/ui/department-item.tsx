import React from 'react'
import { Link } from 'react-router-dom'
import { PostItem } from './post-item'
import { fakePost } from '../../fake-data'

interface Props {
    name: string
    discription: string
}


export const DepartmentItem: React.FC<Props> = ({ discription, name }: Props) => {
    return (
        <Link to={`/department/${name}`}>
            <div className="flex gap-10 hover-translate-y border-b">
                <div className="overflow-hidden w-full">
                    <p className="text-5xl">{name.toUpperCase()}</p>
                    <p className='text-lg pt-2'>{discription}</p>
                    <div className='flex items-center gap-2 my-3'>
                        <img src="/icon/news.svg" alt="" className='icon-sm-' />
                        <p>32</p>
                    </div>
                    <PostItem {...fakePost[0]} fixed />
                </div>
                <img src="/icon/dragon.svg" alt="" className='rounded-lg w-1/5' />
            </div>
        </Link>
    )
}
