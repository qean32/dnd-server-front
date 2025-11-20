import React from 'react'
import { cn } from '../../lib/function'
import { fileDto } from '@/model'
import { File } from '@component/ui'

interface Props {
    className?: string
    files: fileDto[]
}


export const UnwrapFiles: React.FC<Props> = ({ className, files }: Props) => {
    return (
        <div className={cn("flex flex-col", className)}>
            {!!files.length && files.map(item => {
                return <File link={item.name} className="bg-color-dark py-4 px-5" />
            })}
        </div>
    )
}
