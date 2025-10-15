import React from 'react'
import { useBoolean } from '../../lib/castom-hook'
import { UnwrapTags } from './unwrap-tags'

interface Props {
}


export const AddTag: React.FC<Props> = ({ }: Props) => {
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
        <div className='flex w-fit flex-col gap-2 cursor-pointer relative'>
            <div onClick={swap}>Теги</div>
            {!!tags.length && <div className="pointer-events-none" onClick={clickHandlerRemove}><UnwrapTags tags={tags} /></div>}
            {/* <input type="text" value={tags} hidden /> */}
            {view &&
                <div className="pointer-events-none" onClick={clickHandlerAdd}>
                    <UnwrapTags className='absolute bg-color-darkness px-2' tags={["dnd", "фентези", "zxccursed", "разработка", "web"].join(',')} />
                </div>
            }
        </div>
    )
}
