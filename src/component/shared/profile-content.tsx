import React from 'react'
import { Post } from '../ui'

interface Props {
}


export const ProfileContent: React.FC<Props> = ({ }: Props) => {
    return (
        <div className="flex-1">
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    )
}
