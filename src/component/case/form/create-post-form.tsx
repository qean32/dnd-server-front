import React from 'react'
import { PushTagInForm, FakeTextInput, Button, UploadFilesInCreatePost, Select, Hints, TextArea, UnwrapFiles } from '../../ui'
import { previewPost } from '@/lib/function'
import { fileDto } from '@/model'
import { FormProvider } from 'react-hook-form'
import { createPostFormDto, createPostSchema } from '@/model/schema'
import { useMyForm } from '@/lib/castom-hook'

interface Props {
}


export const CreatePostForm: React.FC<Props> = ({ }: Props) => {
    const [files, setFiles] = React.useState<fileDto[]>([])
    const ref = React.useRef<HTMLDivElement | null>(null);

    const { form, submitHandler } =
        useMyForm<createPostFormDto>(
            createPostSchema,
            () => { },
            () => { }
        )

    return (
        <FormProvider {...form}>

            <form onSubmit={submitHandler}>
                <div className='w-[200px] pb-2 pl-0.5'>
                    <Select
                        name='department'
                        options={[
                            { title: "D&D", value: "D&D", id: 1 },
                            { title: "WEB", value: "WEB", id: 2 },
                            { title: "ПРОЧЕЕ", value: "OTHER", id: 3 },
                        ]} />
                </div>

                <UpperPart
                    preview={() => previewPost(ref)}
                    setFiles={setFiles}
                />

                <div className="py-5">
                    <PushTagInForm
                        name='tags'
                    />
                </div>

                <TextArea
                    title="Описание вашей статьи"
                    className='min-h-[160px] p-2 px-3 mb-5'
                    name='discription'
                />
                <TextArea
                    convertHTML
                    ref={ref}
                    title='Текст вашей статьи'
                    className='p-2 px-3 min-h-[600px]'
                    name='text'
                />

                <UnwrapFiles className='pt-5 gap-3' files={files} />
                <Hints />
            </form>
        </FormProvider>
    )
}

type Props_ = {
    setFiles: Function
    preview: React.MouseEventHandler<HTMLDivElement>
}

const UpperPart: React.FC<Props_> = ({ preview, setFiles }: Props_) => {

    return (
        <div className="flex justify-between pb-4">
            <FakeTextInput className="items-end flex pl-1" title="НАЗВАНИЕ ПОСТА" name='title' />
            <div className="flex gap-4 items-end">
                <UploadFilesInCreatePost setFiles={setFiles} name='files'>
                    <div className="flex h-full items-center cursor-pointer">
                        <img src="/icon/upload.svg" className='icon-md' />
                    </div>
                </UploadFilesInCreatePost>
                {/* @ts-ignore */}
                <Button fn={preview} variant='default'><p>Предпросмотр</p></Button>
                <Button variant="acceess" type='submit'><p>Готово</p></Button>
            </div>
        </div>
    )
}
