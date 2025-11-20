import React from 'react'
import { CommentInput } from '@component/ui'
import { CommentItem } from '@component/ui/item'

interface Props {
}


export const CommentBlock: React.FC<Props> = ({ }: Props) => {
    return (
        <div className="bg-color-dark rounded-sm pb-2">
            <CommentInput />
            <p className='pl-6 py-2 text-2xl'>Коментарии</p>
            <CommentItem />
        </div>
    )
}
