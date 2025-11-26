import React from 'react'
import { TechWork } from '../'

interface Props {
    children: React.ReactNode
}


export const ProtectedRouteTechWork: React.FC<Props> = ({ children }: Props) => {
    if (false) {
        return <TechWork />
    }

    return (
        <>
            {children}
        </>
    )
}
