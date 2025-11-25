import { UploadImgArea, Button, TextInput, DisabledInput } from '@/component/ui'
import { TypeUseBoolen } from '@/lib/castom-hook'
import { toast } from '@/lib/function'
import { addMapToSessionFormDto, addMapToSessionSchema } from '@/model/schema'
import { useAppDispatch } from '@/store'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form'

interface Props {
    part: TypeUseBoolen
    children: React.ReactNode
}


export const AddFromForm: React.FC<Props> = ({ children, part }: Props) => {
    const form = useForm<addMapToSessionFormDto>({
        mode: 'onChange',
        resolver: zodResolver(addMapToSessionSchema)
    })

    const onSubmit: SubmitHandler<addMapToSessionFormDto> = (data) => {
        console.log(data);
        toast(dispatch, 'message', { text: '' })
    }
    const dispatch = useAppDispatch()

    return (
        <FormProvider {...form}>

            <form className="w-1/2 flex-1 flex flex-col" onSubmit={form.handleSubmit(onSubmit)}>
                <div className="flex-1">
                    <UploadImgArea className='h-[220px] w-full mt-8' />

                    <div className="px-5">
                        <TextInput placeHolder='Название' name='name' />
                        <p className='py-2 pl-0.5 pb-4'>Размеры карты</p>
                        <div className="flex items-center pb-5">
                            <DisabledInput value={"0"} className='mr-4' />
                            x
                            <DisabledInput value={"0"} className='ml-4' />
                        </div>
                    </div>
                </div>
                <div className="flex justify-end flex-col pb-6 pr-4 items-end">
                    <div className="flex gap-2">
                        {children}
                        <Button fn={() => { }} variant='acceess'>
                            <p className='pointer-events-none'>Добавить</p></Button>
                    </div>
                    <Button variant='acceess' fn={part.on} className='mt-3 w-11/12'><p>Назад</p></Button>
                </div>
            </form>
        </FormProvider>
    )
}
