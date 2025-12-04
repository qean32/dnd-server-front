import React from 'react'
import { cn, isImageFile } from '@lib/function'

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

    if (!imgView) {

        return (
            <div
                data={JSON.stringify({ path })}
                className={cn(
                    className,
                    'py-2 rounded-md transition-300 bg-color-darkness-hover pointer-events-auto'
                )}
            >
                <p className='cursor-pointer pointer-events-none fit-content'>{path}</p>
            </div>
        )
    }

    if (imgView && isImageFile(path)) {
        return <>
            <img src={path} alt="" className='max-w-[400px] rounded-sm mb-3' />
        </>
    }

    else {
        return (
            <a
                href={path}
                target='_blank'
                className={cn(
                    className,
                    'py-2 rounded-md transition-300 bg-color-darkness-hover pointer-events-auto'
                )}
            >
                <p className='cursor-pointer fit-content'>{path}</p>
            </a>
        )
    }
}
