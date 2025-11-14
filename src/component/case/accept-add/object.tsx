import { useAppSelector } from '@/lib/castom-hook/redux'
import React from 'react'

interface Props {
    children: React.ReactNode
}


export const AddObject: React.FC<Props> = ({ children }: Props) => {
    const { object } = useAppSelector(state => state.addedObject)
    console.log(object);
    

    return (
        <div className="w-3/12 h-full flex flex-col px-5">
            <div className="h-1/3 flex justify-center items-center pt-5">
                <div className="w-1/2 aspect-square bg-img rounded-full border-3" style={{ backgroundImage: `url(/img/goblin.jpg)` }}></div>
            </div>
            <div className='pr-2'>
                <p className='text-2xl'>{object?.name}</p>
                <div className="flex justify-between text-sm">
                    <p>Инициатива</p>
                    <p className='bg-yellow-800 pr-8 pl-1'>30</p>
                </div>
                <p className='pt-4 text-sm text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum aut, necessitatibus ex dolores dolorum sequi, sint eveniet omnis perspiciatis rerum porro saepe, iste nihil quaerat explicabo. Eveniet quod ab consectetur ullam excepturi, libero, est, maiores atque facere laboriosam aliquid delectus? Veritatis facilis maxime possimus explicabo labore quaerat quisquam porro ipsa. </p>
            </div>
            <div className="flex-1 flex justify-end flex-col pb-5 items-end">
                {children}
            </div>
        </div>
    )
}
