import React from 'react'

interface Props {
    title: string
}


export const Tag: React.FC<Props> = ({ title }: Props) => {
    return (
        <div className='tag w-fit rounded-sm p-1 px-2 pointer-events-auto'>
            <p className='h-full w-full'>{title}</p>
        </div>
    )
}
