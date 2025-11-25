import React from 'react'
import { useBoolean } from '@/lib/castom-hook'
import { cn } from '@/lib/function'
import { UnwrapTags } from '@component/ui'
import { fakeTags } from '@/fake-data'
import { useFormContext } from 'react-hook-form'

interface Props {
    className?: string
    inForm?: boolean
    name?: string
    push?: (query: { [key: string]: string; }[]) => void;
}


export const AddTag: React.FC<Props> = ({ className, inForm = false, name = '', push }: Props) => {
    const [tags, setTags] = React.useState<string>('')
    const { boolean: view, swap } = useBoolean()
    const { setValue } = inForm ? useFormContext() : { setValue: (_name: string) => { } }
    React.useEffect(() => {
        setValue(name, '')
    }, [])

    const clickHandlerAdd = (e: React.MouseEvent<HTMLDivElement>) => {
        // @ts-ignore
        const tag = e.target.innerHTML
        setTags(prev => {
            {
                const tags = `${prev.split(',').filter(item => item != tag).join(',')},${tag}`
                setValue(name, tags)
                if (push) {
                    push([{ tags }])
                }
                return tags
            }
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

            {!!tags.length &&
                <div
                    className="pointer-events-none"
                    onClick={clickHandlerRemove}
                ><UnwrapTags tags={tags} /></div>}

            <input type="text"
                onChange={() => { }}
                value={tags}
                hidden
            />

            {
                view &&
                <div className="pointer-events-none absolute bottom-0 translate-y-[120%]" onClick={clickHandlerAdd}>
                    <UnwrapTags className='z-50 bg-color-darkness px-2' tags={fakeTags.join(',')} />
                </div>
            }
        </div>
    )
}
