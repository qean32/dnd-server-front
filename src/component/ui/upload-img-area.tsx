import React from 'react'
import { cn, generateId } from '@lib/function'
import { useBoolean } from '@lib/castom-hook';

interface Props {
    className?: string
    dftBG_?: string
}


export const UploadImgArea: React.FC<Props> = ({ className, dftBG_ }: Props) => {
    const [src, setSrc] = React.useState<File[]>([]);
    const [dftBG, setDftBG] = React.useState(dftBG_)
    const { boolean, off, on } = useBoolean(false)

    React.useEffect(() => {
        if (dftBG_)
            setDftBG(dftBG_)
    }, [dftBG_])

    const id = generateId().toString()
    const urls = src.map((file: File) => URL.createObjectURL(file));

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return
        if (!e.target.files[0]) return
        setDftBG('')

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
            <div className={cn("p-5", className)}>
                <label
                    className="flex p-0 h-full rounded-lg cursor-pointer justify-center items-center bg-img bg-color-dark"
                    style={{ borderImageSource: 'https://i.sstatic.net/wLdVc.png', borderImageWidth: '2px' }}
                    htmlFor={id}
                    onDragLeave={e => dragLeaveHandler(e)}
                    onDragStart={e => dragStartHandler(e)}
                    onDragOver={e => dragStartHandler(e)}
                    onDrop={e => dropHandler(e)}
                >
                    {dftBG && <img src={dftBG} alt="" className='h-full rounded-md' />}
                    {urls[0] && <img src={urls[0]} alt="" className='h-full rounded-md' />}
                    {!urls[0] && !dftBG && (boolean ? <img src='/icon/upload-aim.svg' alt="" className='icon-2xl' /> : <img src='/icon/upload.svg' alt="" className='icon-2xl' />)}
                </label>
            </div>
        </>
    )
}
