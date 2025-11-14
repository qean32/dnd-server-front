import { useAppSelector } from '@/lib/castom-hook/redux'
import React from 'react'

interface Props {
    children: React.ReactNode
}


export const AddObject: React.FC<Props> = ({ children }: Props) => {
    const { object } = useAppSelector(state => state.addedObject)
    // @ts-ignore
    const entity = object?.isObject ? object : { path: '', name: '', id: 0 }

    return (
        <div data={JSON.stringify({ ...object })}
            className="w-3/12 h-full flex flex-col px-5 pt-20"
        >
            <div className="h-1/3 flex justify-center items-center">
                <div className="w-10/12 aspect-square bg-img rounded-sm bg-color-dark" style={{ backgroundImage: `url(${entity?.path})` }}></div>
            </div>
            <div className='pl-5 pt-10'>
                <p className='text-2xl'>{entity?.name}</p>
            </div>
            {children}
        </div>
    )
}
