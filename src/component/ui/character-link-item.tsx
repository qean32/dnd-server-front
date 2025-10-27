import React from 'react'

interface Props {
    link: string
    name: string
    number: number
}


export const CharacterLinkItem: React.FC<Props> = ({ link, number, name }: Props) => {
    return (
        <a href={link} target='_blank' className='prime-hover overflow-hidden rounded-sm running-line-parent h-fit w-[85px]'>
            <div className='py-3 items-center flex flex-col gap-2 h-[100px]'>
                <p className='text-5xl'>{number}</p>
                <p className='text-sm'>{name.split(' ')[0]}</p>
            </div>
        </a>
    )
}
