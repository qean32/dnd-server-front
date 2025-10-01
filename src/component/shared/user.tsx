import React from 'react'
import { Ava } from '../ui'

interface Props {
}


export const User: React.FC<Props> = ({ }: Props) => {
    return (
        <div className='px-4 py-4 flex gap-4 bg-color-hover cursor-pointer transition03'>
            <Ava path='' size='ava-md' />
            <p>NICKNAME</p>
        </div>
    )
}
