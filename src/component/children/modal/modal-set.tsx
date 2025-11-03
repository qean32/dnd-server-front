import React from 'react'
import { useBoolean } from '../../../lib/castom-hook'

interface Props {
    children: React.ReactNode
    Modal: React.ReactNode | React.FC | React.ElementType | any
}


export const Set: React.FC<Props> = ({ children, Modal }: Props) => {
    const { boolean, swap } = useBoolean()

    return (
        <>
            <div onClick={(e) => { e.stopPropagation(); swap() }}>{children}</div>
            <Modal view={boolean} swap={swap} />
        </>
    )
}
