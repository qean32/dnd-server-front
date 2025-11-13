import React from 'react'

interface Props {
    children: React.ReactNode
}


export const ViewAuthor: React.FC<Props> = ({ children }: Props) => {
    return (
        <>
            {children}
        </>
    )
}
