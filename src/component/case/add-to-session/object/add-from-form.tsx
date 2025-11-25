import { Button, TextInput } from '@/component/ui'
import { TypeUseBoolen } from '@/lib/castom-hook'
import { toast } from '@/lib/function'
import { addObjectToSessionFormDto, addObjectToSessionSchema } from '@/model/schema'
import { useAppDispatch } from '@/store'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form'

interface Props {
    part: TypeUseBoolen
    children: React.ReactNode
}


export const AddFromForm: React.FC<Props> = ({ children, part }: Props) => {
    const form = useForm<addObjectToSessionFormDto>({
        mode: 'onChange',
        resolver: zodResolver(addObjectToSessionSchema)
    })

    const onSubmit: SubmitHandler<addObjectToSessionFormDto> = (data) => {
        console.log(data);
        toast(dispatch, 'message', { text: '' })
    }
    const dispatch = useAppDispatch()

    return (
        <FormProvider {...form}>

            <form className="w-1/2 flex-1 flex flex-col" onSubmit={form.handleSubmit(onSubmit)}>
                <div className="flex-1 px-5">
                    <div className="h-[300px] flex justify-center items-center pt-15">
                        <img src={''} alt="" className='max-h-full' />
                    </div>
                    <div className='pt-5'>
                        <TextInput placeHolder='Название' name='name' />
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
