import React from 'react'

interface Props {
    name: string
    number: number
}


export const AddCharacterItem: React.FC<Props> = ({ number, name }: Props) => {
    return (
        <div className='overflow-hidden rounded-sm running-line-parent h-fit'>
            <div className='py-3 items-center flex flex-col gap-2 h-[100px]'>
                <p className='text-5xl'>{number}</p>
                <p className='text-sm'>{name.split(' ')[0]}</p>
            </div>
        </div>
    )
}
