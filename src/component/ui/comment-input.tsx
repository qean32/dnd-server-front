import React from 'react'
import { Button, FileInput } from '.'

interface Props {
}


export const CommentInput: React.FC<Props> = ({ }: Props) => {
    return (
        <div className="p-5">
            <div className='flex outline-bg-light outline-1 rounded-sm'>
                <Button><FileInput /></Button>
                {/* <input type="text" placeholder={'ваш коментарий'} className='w-full' style={{ outline: '0' }} /> */}
                <textarea name="" id="" className='w-full translate-y-1/4'></textarea>
                <Button><img src="/icon/send.svg" alt="" className="icon-md" /></Button>
            </div>
        </div>
    )
}
