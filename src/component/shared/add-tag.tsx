import React from 'react'
import { useBoolean } from '../../lib/castom-hook'
import { cn } from '../../lib/function'
import { UnwrapTags } from '../ui'
import { fakeTags } from '../../fake-data'

interface Props {
    className?: string
}


export const AddTag: React.FC<Props> = ({ className }: Props) => {
    const [tags, setTags] = React.useState<string>('')
    const { boolean: view, swap } = useBoolean()

    const clickHandlerAdd = (e: React.MouseEvent<HTMLDivElement>) => {
        // @ts-ignore
        const tag = e.target.innerHTML
        setTags(prev => {
            return `${prev.split(',').filter(item => item != tag).join(',')},${tag}`
        })
        swap()
    }

    const clickHandlerRemove = (e: React.MouseEvent<HTMLDivElement>) => {
        // @ts-ignore
        const tag = e.target.innerHTML
        setTags(prev => {
            return prev.split(',').filter(item => item != tag).join(',')
        })
    }

    return (
        <div className={cn('flex w-full flex-col gap-2 cursor-pointer relative', className)}>
            <div onClick={swap} className='w-fit'>Теги</div>

            {!!tags.length && <div className="pointer-events-none" onClick={clickHandlerRemove}><UnwrapTags tags={tags} /></div>}

            <input type="text" value={tags} hidden onChange={() => { }} />

            {
                view &&
                <div className="pointer-events-none" onClick={clickHandlerAdd}>
                    <UnwrapTags className='absolute z-50 bg-color-darkness px-2' tags={fakeTags.join(',')} />
                </div>
            }
        </div>
    )
}
