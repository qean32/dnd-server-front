import React from 'react'
import { cn } from '../../lib/function'
import { useDinamickPaginationFake } from '../../lib/castom-hook/use-dinamick-pagination-fake'

interface Props {
    className?: string
    propsName: string
    Component: React.ReactNode | React.FC | React.ElementType | any
    array: any[]
    //     RQKey: string
    //     take: number
    //     fetch_: Function
}


export const GroupContainer: React.FC<Props> = ({
    className, Component, array
    // RQKey, fetch_, take
}: Props) => {
    const { finaldata, loading, refHandler } = useDinamickPaginationFake(0, '', array)

    return (
        <div className={cn('', className)}>
            {finaldata.map((item: any) => {
                return (
                    <Component {...item} />
                )
            })}
            <div className='w-100 min-h-[50px]' ref={refHandler} ></div>
            {loading && <p>загрузка</p>}
        </div>
    )
}
