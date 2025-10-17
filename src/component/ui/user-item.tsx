import React from 'react'
import { Ava } from '.'
import { Link } from 'react-router-dom'
import { userDto } from '../../model'


export const UserItem: React.FC<userDto> = ({ ava, id, name }: userDto) => {
    return (
        <Link to={`/profile/${id}`} className='prime-hover'>
            <div className='px-4 py-4 flex gap-4 cursor-pointer transition03 bg-color-light-hover'>
                <Ava path={ava} size='ava-md' />
                <p className='text-lg'>{name}</p>
            </div>
        </Link>
    )
}
