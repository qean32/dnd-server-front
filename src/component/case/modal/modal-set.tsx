import React from 'react'
import { useBoolean } from '../../../lib/castom-hook'
import { propsComponent } from '../../../model'

interface Props {
    children: React.ReactNode
    modal: propsComponent
    props?: any
}


export const Set: React.FC<Props> = ({ children, modal: Modal, ...props }: Props) => {
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
