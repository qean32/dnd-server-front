import React from 'react'

interface Props {
    title: string
}


export const Tag: React.FC<Props> = ({ title }: Props) => {
    return (
        <div className='tag w-fit rounded-sm p-1 px-2'>
            <p className='h-full w-full pointer-events-auto'>{title}</p>
        </div>
    )
}
