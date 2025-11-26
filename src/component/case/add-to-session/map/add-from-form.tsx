import { UploadImgArea, Button, TextInput } from '@/component/ui'
import { TypeUseBoolen, useMyForm } from '@/lib/castom-hook'
import { addMapToSessionFormDto, addMapToSessionSchema } from '@/model/schema'
import React from 'react'
import { FormProvider } from 'react-hook-form'

interface Props {
    part: TypeUseBoolen
    children: React.ReactNode
}


export const AddFromForm: React.FC<Props> = ({ children, part }: Props) => {
    const { form, submitHandler } =
        useMyForm<addMapToSessionFormDto>(
            addMapToSessionSchema,
            () => { },
            () => { }
        )

    return (
        <FormProvider {...form}>

            <form className="w-1/2 flex-1 flex flex-col" onSubmit={submitHandler}>
                <div className="flex-1">
                    <UploadImgArea
                        labelClass='h-full rounded-lg cursor-pointer bg-img bg-color-dark block'
                        className='p-5 h-[220px] w-full mt-5'
                        name='path'
                    />

                    <div className="px-5">
                        <TextInput placeHolder='Название' name='name' />
                    </div>
                </div>
                <div className="flex justify-end flex-col pb-6 pr-4 items-end">
                    <div className="flex gap-2">
                        {children}
                        <Button
                            fn={() => { }}
                            variant='acceess'
                            type='submit'
                        >
                            <p className='pointer-events-none'>Добавить</p></Button>
                    </div>
                    <Button variant='acceess' fn={part.on} className='mt-3 w-11/12'><p>Назад</p></Button>
                </div>
            </form>
        </FormProvider>
    )
}
