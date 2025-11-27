import React from 'react'
import { cn, IsImageFile } from '@lib/function'

interface Props {
    className?: string
    path: string
    imgView?: boolean
}


export const File: React.FC<Props> = ({
    className,
    path,
    imgView = false
}: Props) => {

    if (imgView && IsImageFile(path)) {
        return <>
            <img src={path} alt="" className='max-w-[600px]' />
        </>
    }

    return (
        <a
            className={cn(
                className,
                'py-2 rounded-md transition-300 bg-color-darkness-hover'
            )}
            target='_blank'
            href={path}>
            <p className='cursor-pointer fit-content'>{path}</p>
        </a>
    )
}
