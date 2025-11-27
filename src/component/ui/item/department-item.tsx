import React from 'react'
import { Link } from 'react-router-dom'
import { PostItem } from './post-item'
import { fakePost } from '@/fake-data'

interface Props {
    name: string
    discription: string
    path: string
    count: number
}


export const DepartmentItem: React.FC<Props> = ({
    discription,
    name,
    path,
    count
}: Props) => {
    return (
        <Link to={`/department/${name}`}>
            <div className="flex gap-10 border-b">
                <div className="overflow-hidden w-full pl-2">
                    <p className="text-4xl">{name.toUpperCase()}</p>
                    <p className='text-md pt-2'>{discription}</p>
                    <div className='flex items-center gap-2 mt-2'>
                        <img src="/icon/news.svg" alt="" className='icon-sm-' />
                        <p>{count}</p>
                    </div>
                    <PostItem likes={0} {...fakePost[0]} fixed className='pl-2 -translate-x-2' />
                </div>
                <div className='w-1/6 pb-4 pt-0'>
                    <div className="rounded-lg w-full bg-img bg-shadow h-full"
                        style={{ backgroundImage: `url(${path})` }}
                    ></div>
                </div>
            </div>
        </Link>
    )
}