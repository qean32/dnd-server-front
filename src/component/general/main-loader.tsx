import React from 'react'
import { Logo } from '../ui'
import { useBoolean } from '../../lib/castom-hook'
import { cn } from '../../lib/function'

interface Props {
}


export const MainLoader: React.FC<Props> = ({ }: Props) => {
    const { boolean, off } = useBoolean(true)


    React.useEffect(() => {
        setTimeout(off, 1000)
    }, [])
    return (
        <div className={cn("fixed inset-0 bg-color-darkness flex justify-center items-center transition03", (!boolean && 'pointer-events-none opacity-0'))} style={{ zIndex: '60' }}>
            <Logo size='icon-lg' />
        </div>
    )
}
