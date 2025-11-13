import React from 'react'
import { Ava } from './'

interface Props {
}


export const PostInfo: React.FC<Props> = ({ }: Props) => {
    return (
        <div className="flex items-end gap-2 py-3 pt-4">
            <Ava size="ava-sm" path="/img/auth-bg.jpg" />
            <p>zxccursed</p>
            <p>20.05.2002</p>
            <p># 764</p>
        </div>
    )
}
