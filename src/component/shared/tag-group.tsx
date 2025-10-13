import React from 'react'
import { cn } from '../../lib/function'
import { Tag } from '../ui'

interface Props {
    className?: string
    tags: string
}


export const TagGroup: React.FC<Props> = ({ className, tags }: Props) => {
    return (
        <div className={cn('', className)}>
            {tags.split(',').map(item => {
                return <Tag title={item} />
            })}
        </div>
    )
}
