import React from 'react'
import { FakeTextInput, Button, UploadFilesInCreatePost, Select, Hints, TextArea, UnwrapFiles } from '../../ui'
import { preventDefault } from '@/lib/function'
import { fileDto } from '@/model'

interface Props {
}


export const CreatePostForm: React.FC<Props> = ({ }: Props) => {
    const [files, setFiles] = React.useState<fileDto[]>([])
    const ref = React.useRef<HTMLDivElement | null>(null);
    const preview = () => {
        if (ref.current) {
            // @ts-ignore
            const text = ref.current.innerHTML.replaceAll('/', ';').replaceAll('&nbsp;', '').split('<div>')
            // @ts-ignore
            window.open(`preview/${text}`, '_blank').focus();
        }
    }

    return (
        <form onSubmit={preventDefault}>
            <div className='w-[200px] pb-2'>
                <Select options={[
                    { title: "D&D", value: "1" },
                    { title: "WEB", value: "1" },
                    { title: "ПРОЧЕЕ", value: "1" },
                ]} />
            </div>
            <UpperPart preview={preview} setFiles={setFiles} />
            <TextArea title="Описание вашей статьи" className='min-h-[160px] p-2 px-3 mb-5' />
            <Hints />
            <TextArea ref={ref} title='Текст вашей статьи' className='p-2 px-3 min-h-[600px]' />
            <UnwrapFiles className='pt-5 gap-3' files={files} />
        </form>
    )
}

type Props_ = {
    setFiles: Function
    preview: React.MouseEventHandler<HTMLDivElement>
}

const UpperPart: React.FC<Props_> = ({ preview, setFiles }: Props_) => {
    return (
        <div className="flex justify-between pb-4">
            <FakeTextInput className="items-end flex pl-0.5" title="НАЗВАНИЕ ПОСТА" />
            <div className="flex gap-4 items-end">
                <div onClick={preview}><p className="underline">Предпросмотр</p></div>
                <UploadFilesInCreatePost setFiles={setFiles}>
                    <div className="flex h-full items-center cursor-pointer">
                        <img src="/icon/upload.svg" className='icon-md' />
                    </div>
                </UploadFilesInCreatePost>
                <Button variant="acceess" className="py-2"><p>Готово</p></Button>
            </div>
        </div>
    )
}
