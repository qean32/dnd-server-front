import React from 'react'
import { cn } from '@/lib/function'
import { useDinamickPaginationFake } from '@/lib/castom-hook/use-dinamick-pagination-fake'
import { propsComponent } from '@/model'
import { Loader } from '../ui'

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
    const { finaldata, loading, refHandler, isEnd } = useDinamickPaginationFake(0, '', array)

    return (
        <div className={cn('pb-5 min-h-[400px] flex flex-col', className)}>
            {finaldata.map((item, _) => {
                return (
                    <Component {...item} key={_} />
                )
            })}
            {loading &&
                <div className="flex-1 flex justify-center items-center">
                    <Loader />
                </div>
            }
            <div className='w-100 min-h-[50px]' ref={refHandler} ></div>
            {!isEnd ? <div className="w-full flex justify-center items-center"><Loader /></div> : <p>Конец очереди</p>}
        </div>
    )
}
