import React from 'react'
import { cn, generateId } from '@lib/function'
import { useBoolean } from '@lib/castom-hook'
import { Ava, DangerIcon } from '.'
import { HoverHint } from '../master/h-order-component'
import { useFormContext } from 'react-hook-form'
import { xPositionHint, yPositionHint } from '@/model'

interface SelectProps {
    className?: string
    options: { value: string, title: string, id: number }[]
    name: string
}


export const Select: React.FC<SelectProps> = ({ className = 'w-fit', options, name }: SelectProps) => {
    const { register, setValue } = useFormContext()

    return (
        <select className={cn('flex-1', className)} {...register(name)} onChange={e => setValue(name, e.target.value)} >
            {options.map(({ title, value, id }) => {
                return <option key={id} value={value}>{title}</option>
            })}
        </select>
    )
}

interface TextInputProps {
    className?: string,
    placeHolder: string
    name: string
    validate?: boolean
    xHint?: xPositionHint,
    yHint?: yPositionHint
}


export const TextInput: React.FC<TextInputProps> = ({ className = 'w-full', placeHolder, validate = true, name, xHint = 'left', yHint = 'center-y' }: TextInputProps) => {
    const { register, formState: { errors } } = useFormContext()
    const textError = errors[name]?.message as string;

    return (
        <div className={cn('relative', className)}>
            {validate && textError &&
                <HoverHint className='top-1/2 absolute -translate-y-1/2 right-2' text={textError} x={xHint} y={yHint} >
                    <DangerIcon />
                </HoverHint>
            }
            <input type="text" placeholder={placeHolder} {...register(name)} />
        </div>
    )
}

interface PasswordInputProps {
    className?: string,
    placeHolder: string
    name: string
    xHint?: xPositionHint,
    yHint?: yPositionHint
}


export const PasswordInput: React.FC<PasswordInputProps> = ({ className, placeHolder, name, xHint = 'left', yHint = 'center-y' }: PasswordInputProps) => {
    const view = useBoolean(false)
    const { register, formState: { errors } } = useFormContext()
    const textError = errors[name]?.message as string;

    return (
        <div className={cn('w-full relative', className)}>
            <div className='relative'>
                <input type={view.boolean ? 'text' : 'password'} placeholder={placeHolder} {...register(name)} />
                <img src={view.boolean ? '/icon/unlock.svg' : 'icon/lock.svg'} alt='' onClick={() => view.swap()} className='cursor-pointer icon-sm- absolute top-4 right-3' />
            </div>
            {textError &&
                <HoverHint className='top-1/2 absolute -translate-y-1/2 -left-7' text={textError} x={xHint} y={yHint} >
                    <DangerIcon />
                </HoverHint>
            }
        </div>
    )
}


interface InputFileProps {
    className?: string
    title: string
}


export const ImgInput: React.FC<InputFileProps> = ({ className, title }: InputFileProps) => {
    const id = generateId().toString()
    const [src, setSrc] = React.useState<any>([]);
    const urls = src.map((file: any) => URL.createObjectURL(file));

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return
        if (!e.target.files[0]) return

        setSrc([e.target.files[0]])
    }

    return (
        <div className={cn('w-fit', className)}>
            <label htmlFor={id} className='cursor-pointer'>
                <Ava path={urls[0]} size='ava-lg' className='ml-1' />
                <p className='pt-2 pl-1'>
                    {title}
                </p>
            </label>
            <input accept='image/png, image/jpeg, image/svg, image/jpg, image/webp' type='file' id={id} className='d-none' onChange={changeHandler} />
        </div>
    )
}

interface CheckboxProps {
    value: boolean
    fn: Function
    title: string
    className?: string
}

export const Checkbox: React.FC<CheckboxProps> = ({ title, className }: CheckboxProps) => {
    const { boolean, swap } = useBoolean()
    return (
        <div onClick={swap} className={cn('cursor-pointer flex gap-3.5', className)} >
            <p className='text-sm'>{title}</p>
            <div className="flex justify-center flex-col relative icon-sm">
                <input type='checkbox' className={cn('transition-03 absolute top-1.5 border-0 scale-95', (boolean && 'opacity-0'))} style={{ width: 'fit-content' }} />
                <img src='/icon/accept.svg' alt=''
                    className={cn('transition-03 icon-sm absolute top-1', (!boolean && 'opacity-0'))}
                />
            </div>
        </div>
    );
}

interface SearchProps {
    className?: string
}


export const Search: React.FC<SearchProps> = ({ className = 'w-full' }: SearchProps) => {
    return (
        <div className={cn('relative', className)}>
            <input type="search" placeholder='поиск..' />
            <img src="/icon/search.svg" alt="" className='absolute icon-sm top-1/2 -translate-y-1/2 right-3' style={{ width: '21px' }} />
        </div>
    )
}


interface FileProps {
    className?: string
}


export const FileInput: React.FC<FileProps> = ({ className }: FileProps) => {
    const id = generateId().toString()
    return (
        <div className={cn('w-fit', className)}>
            <input type="file" name="" id={id} hidden />
            <label htmlFor={id}>
                <img src='/icon/upload.svg' className='icon-md cursor-pointer' />
            </label>
        </div>
    )
}


interface FakeTextProps {
    className?: string
    title: string
    name: string
    xHint?: xPositionHint
    yHint?: yPositionHint
}

export const FakeTextInput: React.FC<FakeTextProps> = ({ title, className, name, xHint = 'right', yHint = 'center-y' }: FakeTextProps) => {
    const { register, formState: { errors } } = useFormContext()
    const textError = errors[name]?.message as string;

    return (
        <div className={cn("relative", className)}>
            <input type="text" className='fake-input text-3xl w-fit' defaultValue={title} style={{ outline: 0 }} {...register(name)} />
            {textError &&
                <HoverHint className='top-1/2 absolute -translate-y-1/2 -left-7' text={textError} x={xHint} y={yHint} >
                    <DangerIcon />
                </HoverHint>
            }
        </div>
    )
}