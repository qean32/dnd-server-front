import React from 'react'
import { useBoolean } from '../../lib/castom-hook'
import { UnwrapTags } from './unwrap-tags'

interface Props {
}


export const AddTag: React.FC<Props> = ({ }: Props) => {
    const [tags, setTags] = React.useState<string>('')
    const { boolean: view, swap } = useBoolean()

    const clickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        // @ts-ignore
        const tag = e.target.innerHTML
        setTags(prev => {
            return `${prev.split(',').filter(item => item != tag).join(',')},${tag}`
        })
    }

    return (
        <div className='flex w-fit flex-col gap-2 cursor-pointer relative' onClick={swap}>
            <div>теги</div>
            {!!tags.length && <UnwrapTags tags={tags} />}
            <input type="text" value={tags} hidden />
            {view &&
                <div className="" onClick={clickHandler}>
                    <UnwrapTags className='absolute bg-color-darkness px-2' tags={["dnd", "фентези", "zxccursed", "разработка", "web"].join(',')} />
                </div>
            }
        </div>
    )
}
