import React from 'react'
import { cn, generateId } from '../../lib/function'
import { useBoolean } from '../../lib/castom-hook';

interface Props {
    className?: string
}


export const AddImgArea: React.FC<Props> = ({ className }: Props) => {
    const [src, setSrc] = React.useState<any>([]);
    const { boolean, off, on } = useBoolean(false)
    const id = generateId().toString()
    const urls = src.map((file: any) => URL.createObjectURL(file));

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return
        if (!e.target.files[0]) return

        setSrc([e.target.files[0]])
    }

    const dragLeaveHandler = (e: React.DragEvent<HTMLLabelElement>) => {
        e.preventDefault()

        off()
    }
    const dragStartHandler = (e: React.DragEvent<HTMLLabelElement>) => {
        e.preventDefault()

        on()
    }
    const dropHandler = (e: React.DragEvent<HTMLLabelElement>) => {
        e.preventDefault()

        e.dataTransfer.files && setSrc([e.dataTransfer.files[0]])
    }


    return (
        <>
            <input accept='image/png, image/jpeg, image/svg, image/jpg, image/webp' type='file' hidden id={id} onChange={changeHandler} />
            <div className={cn("w-full h-10/12 p-5", className)}>
                <label
                    className="flex p-0 h-full rounded-lg cursor-pointer justify-center items-center bg-img bg-color-dark"
                    style={{ borderImageSource: 'https://i.sstatic.net/wLdVc.png', borderImageWidth: '2px' }}
                    htmlFor={id}
                    onDragLeave={e => dragLeaveHandler(e)}
                    onDragStart={e => dragStartHandler(e)}
                    onDragOver={e => dragStartHandler(e)}
                    onDrop={e => dropHandler(e)}
                >
                    {urls[0] && <img src={urls[0]} alt="" className='h-full rounded-md' />}
                    {!urls[0] && (boolean ? <img src={urls[0]} alt="" width={50} /> : <img src={'/icon/community.svg'} alt="" width={50} />)}
                </label>
            </div>
        </>
    )
}
