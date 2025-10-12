import React from 'react'
import { Ava } from '../ui'
import { Link } from 'react-router-dom'

interface Props {
}


export const User: React.FC<Props> = ({ }: Props) => {
    return (
        <Link to={'/profile/1'}>
            <div className='px-4 py-4 flex gap-4 cursor-pointer transition03 bg-color-light-hover'>
                <Ava path='' size='ava-md' />
                <p className='text-lg'>NICKNAME</p>
            </div>
        </Link>
    )
}
