import { characterDto } from '@/model/entities.dto'
import React from 'react'

interface Props extends characterDto {
}


export const CharacterItemInAdd: React.FC<Props> = ({
    id,
    name,
    path = '/img/entity.jpg',
    discription,
}: Props) => {
    return (
        <div data={JSON.stringify({ id, name, discription, path })}
            className='prime-hover relative overflow-hidden rounded-sm running-line-parent h-[100px] cursor-pointer bg-color-dark-hover transition-300 bg-img hover:-translate-y-2'>
            <div className="bg-shadow- absolute inset-0 bg-img z-10" style={{ backgroundImage: `url(${path})` }}></div>
            <div className='py-3 items-center flex absolute inset-0 flex-col gap-2 h-[100px] z-20'>
                <p className='text-5xl'>{id}</p>
                <p className='text-sm'>{name.split(' ')[0]}</p>
            </div>
        </div>
    )
}
