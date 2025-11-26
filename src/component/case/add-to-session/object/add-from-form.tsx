import { Button, TextInput, UploadImgArea } from '@/component/ui'
import { TypeUseBoolen, useMyForm } from '@/lib/castom-hook'
import { addObjectToSessionFormDto, addObjectToSessionSchema } from '@/model/schema'
import React from 'react'
import { FormProvider } from 'react-hook-form'

interface Props {
    part: TypeUseBoolen
    children: React.ReactNode
}


export const AddFromForm: React.FC<Props> = ({ children, part }: Props) => {
    const { form, submitHandler } =
        useMyForm<addObjectToSessionFormDto>(
            addObjectToSessionSchema,
            () => { },
            () => { }
        )

    return (
        <FormProvider {...form}>

            <form className="w-1/2 flex-1 flex flex-col" onSubmit={submitHandler}>
                <div className="flex-1 px-5">
                    <div className="h-[300px] flex justify-center items-center pt-15">
                        <UploadImgArea
                            name='path'
                            className='w-[99%] aspect-square p-0'
                            iconSize='icon-lg'
                            labelClass='flex p-0 w-full overflow-hidden aspect-square rounded-md outline-bg-light cursor-pointer justify-center items-center bg-img' />
                    </div>
                    <div className='pt-10'>
                        <TextInput placeHolder='Название' name='name' />
                    </div>
                </div>
                <div className="flex justify-end flex-col pb-6 pr-4 items-end">
                    <div className="flex gap-2">
                        {children}
                        <Button fn={() => { }} type='submit' variant='acceess'>
                            <p className='pointer-events-none'>Добавить</p></Button>
                    </div>
                    <Button variant='acceess' fn={part.on} className='mt-3 w-11/12'><p>Назад</p></Button>
                </div>
            </form>
        </FormProvider>
    )
}
