import React from 'react'
import { Ava } from '..'
import { Link } from 'react-router-dom'

interface Props {
}


export const CommentItem: React.FC<Props> = ({ }: Props) => {
    return (
        <div className="flex gap-2 justify-between pt-2 px-5">
            <div className="flex gap-2">
                <Link to={'/profile/2/zxczxc'} className="flex gap-2 flex-col">
                    <Ava size="ava-sm" path="" />
                </Link >
                <div className='flex flex-col gap-2 pl-2 pb-2'>
                    <Link to={'/profile/2/zxcc'}>NICKNAME</Link>
                    <p className='text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt eius aperiam dignissimos obcaecati sint blanditiis maiores at quibusdam in consequuntur ducimus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt eius aperiam dignissimos obcaecati sint blanditiis maiores at quibusdam in consequuntur ducimus.</p>
                </div>
            </div>
            <p className='text-sm w-[100px] pl-5'>20.05.20</p>
        </div>
    )
}
