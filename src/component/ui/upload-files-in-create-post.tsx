import { fileDto } from '@/model'
import React from 'react'

interface Props {
    setFiles: Function
    children: React.ReactNode
}


export const UploadFilesInCreatePost: React.FC<Props> = ({ setFiles, children }: Props) => {
    const changeHandlerFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e);

        if (e.target.files) {

            // @ts-ignore
            setFiles((prev: fileDto[]) => [...prev, ...[...e.target.files].map(item => { return { file: item, name: item.name } })])
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
