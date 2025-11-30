import React from 'react'
import { useBoolean, useHandlerClearQuery, useQueryParam } from '@/lib/castom-hook'
import { cn } from '@/lib/function'
import { UnwrapTags } from '@component/ui'
import { fakeTags } from '@/fake-data'

interface Props {
    className?: string
}


export const PushTagInFilter: React.FC<Props> = ({
    className,
}: Props) => {
    const [tags, setTags] = useQueryParam('tags', '')
    const { boolean: view, swap } = useBoolean()
    useHandlerClearQuery('tags', setTags)

    const clickHandlerPush = (e: React.MouseEvent<HTMLDivElement>) => {
        // @ts-ignore
        const tag = e.target.innerHTML
        if (!tags.includes(tag))
            setTags(tags + tag + ',')
        swap()
    }

    const clickHandlerRemove = (e: React.MouseEvent<HTMLDivElement>) => {
        // @ts-ignore
        const newTags = tags.split(',').slice(0, -1).filter(item => item != e.target.innerHTML).join(',')
        setTags(`${newTags}${!!newTags.length ? ',' : ''}`);
    }

    return (
        <div className={cn('flex w-full flex-col gap-2 cursor-pointer relative', className)}>
            <div onClick={swap} className='w-fit'>Теги</div>

            {!!tags.length &&
                <div
                    className="pointer-events-none"
                    onClick={clickHandlerRemove}
                ><UnwrapTags tags={tags} /></div>}
            {
                view &&
                <div className="pointer-events-none absolute bottom-0 translate-y-[120%]" onClick={clickHandlerPush}>
                    <UnwrapTags className='z-50 bg-color-darkness px-2' tags={fakeTags.join(',')} />
                </div>
            }
        </div>
    )
}
