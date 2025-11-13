import React from 'react'
import { propsComponent } from '@/model'

interface Props {
    array: any[]
    component: propsComponent
    title: string
}


export const UnwrapArray: React.FC<Props> = ({ array, title, component: Component }: Props) => {
    return (
        <div className='w-1/4'>
            <p className='pl-3 pb-2'>{title}</p>
            <div className='flex-1 pt-2 pb-2 max-h-full overflow-scroll'>
                {array.map(item => {
                    return <Component {...item} key={item.id} />
                })}
            </div>
        </div>
    )
}
