import React from 'react'
import { cn } from '../../lib/function'
import { Tag } from '.'

interface Props {
    className?: string
    tags: string
}


export const UnwrapTags: React.FC<Props> = ({ className = 'bg-color-darkness px-2', tags }: Props) => {
    return (
        <div className={cn('flex gap-2 w-[240px] flex-wrap rounded-sm py-2', className)}>
            {tags.split(',').map(item => item && <Tag title={item} key={item} />)}
        </div>
    )
}
