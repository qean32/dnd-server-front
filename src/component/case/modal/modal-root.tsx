import React from 'react'
import { useBoolean } from '@/lib/castom-hook'

interface Props {
    children: React.ReactNode
    modal: any
    props?: any
}


export const Root: React.FC<Props> = ({ children, modal: Modal, props }: Props) => {
    const { boolean, swap } = useBoolean()

    return (
        <>
            <div onClick={(e) => { e.stopPropagation(); swap() }}>
                {children}
            </div>
            <Modal
                swap={swap}
                {...props}
                view={boolean}
            />
        </>
    )
}
