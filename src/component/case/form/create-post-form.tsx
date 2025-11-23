import React from 'react'
import { FakeTextInput, Button, UploadFilesInCreatePost, Select, Hints, TextArea, UnwrapFiles } from '../../ui'
import { toast } from '@/lib/function'
import { fileDto } from '@/model'
import { separator } from '@/export'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { authFormDto, authSchema } from '@/model/schema'
import { useAppDispatch } from '@/store'
import { zodResolver } from '@hookform/resolvers/zod'

interface Props {
}


export const CreatePostForm: React.FC<Props> = ({ }: Props) => {
    const [files, setFiles] = React.useState<fileDto[]>([])
    const ref = React.useRef<HTMLDivElement | null>(null);
    const preview = () => {
        if (ref.current) {
            const links = ref.current.innerHTML.match(/\{(.*?)\}/g)
            // @ts-ignore
            const text = ref.current.innerHTML.replaceAll('/', '').replaceAll('&nbsp;', '').split('<div>')
            // @ts-ignore
            window.open(`preview/${text}${separator}${links?.join(', ').replaceAll('/', ';')}`, '_blank').focus();
        }
    }
    const form = useForm<authFormDto>({
        mode: 'onChange',
        resolver: zodResolver(authSchema)
    })
    const [error] = React.useState<string>()

    const onSubmit: SubmitHandler<authFormDto> = (data) => {
        console.log(data);
        toast(dispatch, 'message', { text: error })
    }
    const dispatch = useAppDispatch()

    return (
        <FormProvider {...form}>

            <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className='w-[200px] pb-2 pl-0.5'>
                    <Select options={[
                        { title: "D&D", value: "1" },
                        { title: "WEB", value: "1" },
                        { title: "ПРОЧЕЕ", value: "1" },
                    ]} />
                </div>
                <UpperPart preview={preview} setFiles={setFiles} />
                <TextArea title="Описание вашей статьи" className='min-h-[160px] p-2 px-3 mb-5' />
                <TextArea ref={ref} title='Текст вашей статьи' className='p-2 px-3 min-h-[600px]' />
                <Hints />
                <UnwrapFiles className='pt-5 gap-3' files={files} />
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
            <FakeTextInput className="items-end flex pl-1" title="НАЗВАНИЕ ПОСТА" />
            <div className="flex gap-4 items-end">
                <UploadFilesInCreatePost setFiles={setFiles}>
                    <div className="flex h-full items-center cursor-pointer">
                        <img src="/icon/upload.svg" className='icon-md' />
                    </div>
                </UploadFilesInCreatePost>
                {/* @ts-ignore */}
                <Button fn={preview} variant='default'><p>Предпросмотр</p></Button>
                <Button variant="acceess"><p>Готово</p></Button>
            </div>
        </div>
    )
}
