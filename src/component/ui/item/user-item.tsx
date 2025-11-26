import React from 'react'
import { Ava } from '@component/ui'
import { Link } from 'react-router-dom'
import { userDto } from '@/model'


export const UserItem: React.FC<userDto> = ({ ava, id, name }: userDto) => {
    return (
        <Link to={`/profile/${id}/${name}`} className='prime-hover'>
            <div className='px-1 py-4 flex gap-6 items-center cursor-pointer mount-opacity transition-300 pl-5'>
                <Ava path={ava} size='ava-md' />
                <p className='text-lg'>{name}</p>
            </div>
        </Link>
    )
}
