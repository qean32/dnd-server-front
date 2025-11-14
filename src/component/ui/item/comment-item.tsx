import React from 'react'
import { Ava, File } from '..'

interface Props {
}


export const CommentItem: React.FC<Props> = ({ }: Props) => {
    return (
        <div className="flex gap-2 justify-between pt-2 px-5">
            <div className="flex gap-2">
                <div className="flex gap-2 flex-col">
                    <Ava size="ava-md" path="" />
                    <p>NICKNAME</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt eius aperiam dignissimos obcaecati sint blanditiis maiores at quibusdam in consequuntur ducimus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt eius aperiam dignissimos obcaecati sint blanditiis maiores at quibusdam in consequuntur ducimus.</p>
                    <File className='bg-color' />
                </div>
            </div>
            <p>дата</p>
        </div>
    )
}
