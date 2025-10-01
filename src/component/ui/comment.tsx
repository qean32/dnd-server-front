import React from 'react'
import { Ava, File } from '.'

interface Props {
}


export const Comment: React.FC<Props> = ({ }: Props) => {
    return (
        <div className="flex gap-2 justify-between pt-2">
            <div className="flex gap-2">
                <div className="flex gap-2 flex-col">
                    <p>NICKNAME</p>
                    <Ava size="ava-md" path="" />
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt eius aperiam dignissimos obcaecati sint blanditiis maiores at quibusdam in consequuntur ducimus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt eius aperiam dignissimos obcaecati sint blanditiis maiores at quibusdam in consequuntur ducimus.</p>
                    <File className='bg-color' />
                </div>
            </div>
            <p>дата</p>
        </div>
    )
}
