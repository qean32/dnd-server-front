import React from 'react'
import { cn } from '../../lib/function'

interface Props {
    className?: string
    children: React.ReactNode
    count: number
}


export const IconAndNumber: React.FC<Props> = ({ className, children, count }: Props) => {
    const [value, setValue] = React.useState(count)

    const clickHandler = () => {
        console.log(value, count)
        if (value == count)
            setValue(prev => ++prev)
        else
            setValue(prev => --prev)
    }
    return (
        <div className={cn('overflow-hidden flex gap-2 h-[30px] bg-color-light-hover transition03 p-2 cursor-pointer items-center rounded-full', className)} onClick={clickHandler}>
            {children}
            <div>
                <div className='flex'>
                    <p className={cn('transition03', value > count && 'translate-y-full')}>1</p>
                    <p className={cn('transition07', value > count && 'translate-y-full')}>0</p>
                </div>
                <div className={cn('transition03', value != count && 'translate-y-full')}>{count}</div>
                <p>{count - 1}</p>
            </div>
        </div>
    )
}
