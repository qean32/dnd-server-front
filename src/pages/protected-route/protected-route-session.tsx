import React from 'react'
import { P404 } from '../'

interface Props {
    children: React.ReactNode
}


export const ProtectedRouteTechWork: React.FC<Props> = ({ children }: Props) => {
    if (false) {
        return <P404 />
    }

    return (
        <>
            {children}
        </>
    )
}
