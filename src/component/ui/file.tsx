import React from 'react'
import { cn } from '../../lib/function'

interface Props {
    className?: string
}


export const File: React.FC<Props> = ({ className }: Props) => {
    return (
        <div className={cn(className, 'py-2 rounded-sm')}>
            <p className='underline cursor-pointer fit-content'>zxczxc.php</p>
        </div>
    )
}
