import { fileDto } from '@/model'
import React from 'react'
import { useFormContext } from 'react-hook-form'

interface Props {
    setFiles: Function
    children: React.ReactNode
    name: string
}


export const UploadFilesInCreatePost: React.FC<Props> = ({
    setFiles,
    children,
    name
}: Props) => {
    const { setValue } = useFormContext()
    const changeHandlerFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setValue(name, e.target.files)
            // @ts-ignore
            setFiles((prev: fileDto[]) => [...prev, ...[...e.target.files].map(item => { return { file: item, path: item.name } })])
        }
    }

    return (
        <>
            <input type="file" hidden multiple id='upload_img_in_post' onChange={changeHandlerFile} />
            <label htmlFor="upload_img_in_post" className='h-full'>
                {children}
            </label>
        </>
    )
}
