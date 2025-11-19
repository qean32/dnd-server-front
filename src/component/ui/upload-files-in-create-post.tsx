import React from 'react'

interface Props {
    setFiles: Function
    children: React.ReactNode
}


export const UploadFilesInCreatePost: React.FC<Props> = ({ setFiles, children }: Props) => {
    const changeHandler = () => {
        setFiles('')
    }
    return (
        <>
            <input type="file" hidden id='upload_img_in_post' onChange={changeHandler} />
            <label htmlFor="upload_img_in_post">
                {children}
            </label>
        </>
    )
}
