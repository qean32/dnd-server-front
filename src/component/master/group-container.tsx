import React from 'react'
import { cn } from '../../lib/function'
import { useDinamickPaginationFake } from '../../lib/castom-hook/use-dinamick-pagination-fake'
import { propsComponent } from '../../model'

interface Props {
    className?: string
    propsName: string
    component: propsComponent
    array: any[]
    //     RQKey: string
    //     take: number
    //     fetch_: Function
}


export const GroupContainer: React.FC<Props> = ({
    className,
    component: Component,
    array,
    // RQKey, fetch_, take
}: Props) => {
    const { finaldata, loading, refHandler } = useDinamickPaginationFake(0, '', array)

    return (
        <div className={cn('', className)}>
            {finaldata.map((item, _) => {
                return (
                    <Component {...item} key={_} />
                )
            })}
            <div className='w-100 min-h-[50px]' ref={refHandler} ></div>
            {loading && <p>загрузка</p>}
        </div>
    )
}
