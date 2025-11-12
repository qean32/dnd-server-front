import React from 'react'
import { Title, TokenItem } from '../ui'
import { entityDto } from '../../model'

interface Props {
    title: string
    array?: entityDto[]
}


export const GroupToken: React.FC<Props> = ({ title }: Props) => {
    return (
        <div className="ml-5 rounded-sm pb-2 pt-2">
            <Title className='pb-2'>{title}</Title>
            <div className="grid grid-cols-5 adaptive2k-grid-column-5">
                <TokenItem />
                <TokenItem />
                <TokenItem />
                <TokenItem />
                <TokenItem />
                <TokenItem />
                <TokenItem />
                <TokenItem />
                <TokenItem />
            </div>
        </div>
    )
}
