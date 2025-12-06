import { nameProject } from '@/export'
import React from 'react'
import { Logo } from '../logo'

interface Props {
}


export const LargeLogo: React.FC<Props> = ({ }: Props) => {

    return (
        <div className="w-full h-[600px] flex-col flex justify-center items-center gap-10 pb-10">
            <Logo size="icon-3xl" />
            <p>{nameProject}</p>
        </div>
    )
}
