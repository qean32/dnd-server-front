import { useAppSelector } from '@/lib/castom-hook/redux'
import React from 'react'

interface Props {
    children: React.ReactNode
}


export const AddEntity: React.FC<Props> = ({ children }: Props) => {
    const { object } = useAppSelector(state => state.addedObject)
    // @ts-ignore
    const entity = object?.isEntity ? object : { path: '', name: '', id: 0 }

    return (
        <div data={JSON.stringify({ ...object })}
            className="w-3/12 h-full flex flex-col px-5"
        >
            <div className="h-1/3 flex justify-center items-center pt-5">
                <div className="w-7/12 aspect-square bg-img bg-color-dark rounded-full" style={{ backgroundImage: `url(${entity?.path})` }}></div>
            </div>
            <div className='pr-2 pt-2 px-4'>
                <p className='text-2xl'>{entity?.name}</p>
                <div className="flex justify-between text-sm">
                    <p>Инициатива</p>
                    <p className='bg-yellow-800 pr-8 pl-1'>{entity?.id}</p>
                </div>
                {/* @ts-ignore */}
                <p className='pt-4 text-sm text-justify'>{entity?.discription}</p>
            </div>
            {children}
        </div>
    )
}
