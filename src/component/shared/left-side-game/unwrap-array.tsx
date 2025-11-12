import React from 'react'

interface Props {
    array: any[]
    Component: React.ReactNode | React.FC | React.ElementType | any
    title: string
}


export const UnwrapArray: React.FC<Props> = ({ array, title, Component }: Props) => {
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
