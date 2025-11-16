import React from 'react'
import { Button, FileInput } from '.'

interface Props {
}


export const CommentInput: React.FC<Props> = ({ }: Props) => {
    return (
        <div className="p-5">
            <div className='flex outline-bg-light outline-1 rounded-sm items-end py-2 pb-1'>
                <Button><FileInput /></Button>
                {/* @ts-ignore */}
                <div className="w-full max-h-[300px] overflow-scroll translate-y-1.5 text-xl" placeholder="Ваш коментарий" contentEditable style={{ outline: 'none' }}></div>
                <Button><img src="/icon/send.svg" alt="" className="icon-md" /></Button>
            </div>
        </div>
    )
}
