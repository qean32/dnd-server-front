import React from 'react'
import { cn } from '../../lib/function'
import { useFormContext } from 'react-hook-form'
import { HoverHint } from '../master/h-order-component'
import { DangerIcon } from '.'

interface Props {
    className?: string
    title: string
    ref?: React.RefObject<HTMLDivElement> | null
    children?: React.ReactNode
    name: string
}


export const TextArea: React.FC<Props> = ({ className, title, ref, children, name }: Props) => {
    const { register, formState: { errors }, setValue } = useFormContext()
    const textError = errors[name]?.message as string;


    return (
        <div className="relative">
            {textError &&
                <HoverHint className='top-6 absolute -translate-y-1/2 right-2' text={textError} x={'left'} y={'bottom'} >
                    <DangerIcon />
                </HoverHint>
            }
            <div
                contentEditable={true}
                {...register(name)}
                ref={ref}
                onInput={e => {
                    setValue(name, e.currentTarget.textContent, { shouldValidate: true });
                }}
                // @ts-ignore
                placeholder={title}
                suppressContentEditableWarning={true}
                className={cn("outline-0 bg-color-dark w-full rounded-md", className)}
            >
                {children}
            </div>
        </div>
    )
}
