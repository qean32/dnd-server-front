import { nameProject } from '@/export'
import React from 'react'
import { Logo } from '../logo'

interface Props {
}


export const LargeLogo: React.FC<Props> = ({ }: Props) => {


    return (
        <div className="w-full h-[600px] flex-col flex justify-center items-center pb-10">
            <div className="flex flex-col gap-5 items-center">
                <Logo size="icon-3xl" />
                <p>{nameProject}</p>
            </div>
            <a href={process.env.DISCORD} target='_blank' className='hover:-translate-y-1 transition-300 cursor-pointer'>
                <img src="/icon/discord.svg" alt="" width={100} />
            </a>
        </div>
    )
}
