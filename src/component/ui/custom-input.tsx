import React from 'react'
import { cn, generateId } from '../../lib/function'
import { useBoolean } from '../../lib/castom-hook'
import { Ava } from './'

interface SelectProps {
    className?: string
    fn?: () => {}
    options: React.ReactElement<any, any>[]
}


export const Select: React.FC<SelectProps> = ({ className = 'fit-content', fn, options }: SelectProps) => {
    const [value, setValue] = React.useState()
    const { boolean, swap } = useBoolean(false)

    const selectHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        // @ts-ignore
        setValue(e.target.children[0].children[1].innerHTML)
    }

    return (
        <div className={cn('cursor-pointer relative w-[100%]', className)} onClick={swap} >
            <input type="text" hidden value={value} />
            <div className='flex gap-2 px-2 py-1 justify-between' >
                <p>{value ?? 'Выберите опцию'}</p>
                <img src="/icon/arrow.svg" alt="" className={cn('transition07', !boolean && 'rotate-90')} />
            </div>
            {boolean &&
                <div className='absolute bg-color-dark w-[100%] rounded-b-sm' onClick={fn ?? selectHandler}>
                    {options.map((item, _) => {
                        return (
                            <div key={_} className='px-2 py-1 flex gap-2 child-no-event'>{item}</div>
                        )
                    })}
                </div>
            }
        </div>
    )
}

interface TextInputProps {
    className?: string,
    placeHolder: string
    validate?: boolean
}


export const TextInput: React.FC<TextInputProps> = ({ className = 'w-[100%]', placeHolder, validate = true }: TextInputProps) => {
    return (
        <div className={cn('', className)}>
            <input type="text" name={placeHolder} placeholder={placeHolder} />
            {validate && <div><p className='text-warning'>{/* Используйте латиницу! */}</p></div>}
        </div>
    )
}

interface PasswordInputProps {
    className?: string,
    placeHolder: string
}


export const PasswordInput: React.FC<PasswordInputProps> = ({ className, placeHolder }: PasswordInputProps) => {
    const view = useBoolean(false)
    return (
        <div className={cn('w-[100%]', className)}>
            <div className='relative'>
                <input type={view.boolean ? 'text' : 'password'} name={placeHolder} placeholder={placeHolder} />
                <img src={view.boolean ? '/icon/unlock.svg' : 'icon/lock.svg'} alt='' onClick={() => view.swap()} className='cursor-pointer icon-sm- absolute top-3.5 right-2.5' />
            </div>
            <div><p className='text-warning'>Минимальная длина - 8, Используйте латиницу и цифры!</p></div>
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
        <div className={cn('fit-content', className)}>
            <label htmlFor={id} className='cursor-pointer'>
                {urls[0] ?
                    <Ava path={urls[0]} size='ava-lg' />
                    :
                    <img src="/icon/upload.svg" alt="" className='icon-lg' />
                }
                <p className='pt-2'>
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

export const Checkbox: React.FC<CheckboxProps> = ({ title, fn, value, className }: CheckboxProps) => {
    return (
        <div onClick={() => fn()} className={cn('cursor-pointer fit-content flex gap-3.5', className)} >
            <p>{title}</p>
            <input type='checkbox' className={cn('transition03 border-0', (value && 'opacity-0'))} style={{ transform: 'translateY(1px)' }} />
            <img src='/icon/accept.svg'
                alt=''
                className={cn('transition03 w-[19px]', (!value && 'opacity-0'))}
                style={{ transform: 'translateX(-160%)' }}
            />
        </div>
    );
}

interface SearchProps {
    className?: string
}


export const Search: React.FC<SearchProps> = ({ className }: SearchProps) => {
    return (
        <div className={cn('relative w-[100%]', className)}>
            <input type="text" placeholder='поиск..' />
            <img src="/icon/search.svg" alt="" className='absolute top-3 right-3' />
        </div>
    )
}


interface Props {
    className?: string
}


export const FileInput: React.FC<Props> = ({ className }: Props) => {
    const id = generateId().toString()
    return (
        <div className={cn('fit-content', className)}>
            <input type="file" name="" id={id} hidden />
            <label htmlFor={id}>
                <img src='/icon/upload.svg' className='icon-md cursor-pointer' />
            </label>
        </div>
    )
}
