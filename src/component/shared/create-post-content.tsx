import React from 'react'
import { Link } from 'react-router-dom'
import { FakeTextInput, Button, File, UploadFilesInCreatePost } from '../ui'

interface Props {
}


export const CreatePostContent: React.FC<Props> = ({ }: Props) => {
    const [files, setFiles] = React.useState('')

    return (
        <>
            <div className="flex justify-between pb-4">
                <FakeTextInput className="items-end flex" title="НАЗВАНИЕ ПОСТА" />
                <div className="flex gap-4 items-end">
                    <Link to={''}><p className="underline">Предпросмотр</p></Link>
                    <UploadFilesInCreatePost setFiles={setFiles}>
                        <Button variant="acceess" className="py-2 px-3 h-full"><img src="/icon/upload.svg" /></Button>
                    </UploadFilesInCreatePost>
                    <Button variant="acceess" className="py-2"><p>Готово</p></Button>
                </div>
            </div>
            <div contentEditable
                // @ts-ignore
                placeholder="Описание"
                className="outline-0 bg-color-dark w-full rounded-md min-h-[160px] p-2 px-3 mb-5">
            </div>
            <div
                contentEditable
                // @ts-ignore
                placeholder="Ваш пост!"
                className="outline-0 bg-color-dark w-full rounded-md p-2 px-3 min-h-[600px]">
            </div>
            <div className="flex flex-col gap-2 mt-5">
                {files.split(', ').map(item => {
                    return <File link='item' name={item} className="bg-color-dark py-4 px-5" />
                })}
            </div>
        </>
    )
}
