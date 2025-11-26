import React from 'react'
import { ViewSession } from '../'

interface Props {
    children: React.ReactNode
}


export const ProtectedRouteSession: React.FC<Props> = ({ children }: Props) => {
    if (false) {
        return <ViewSession />
    }

    return (
        <>
            {children}
        </>
    )
}
