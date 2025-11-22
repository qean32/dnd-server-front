import { UploadImgArea, Button, TextInput } from '@/component/ui'
import React from 'react'

interface Props {
    children: React.ReactNode
}


export const AddFromForm: React.FC<Props> = ({ children }: Props) => {
    return (
        <div className="w-1/2 flex-1 flex flex-col">
            <div className="flex-1">
                <UploadImgArea className='h-1/3 w-full mt-8' />

                <div className="px-5">
                    <TextInput placeHolder='Название' />
                    <p className='py-2 pl-0.5 pb-4'>Размеры карты</p>
                    <div className="flex items-center pb-5">
                        <TextInput validate={false} placeHolder='x' className='mr-4' />
                        x
                        <TextInput validate={false} placeHolder='y' className='ml-4' />
                    </div>
                </div>
            </div>
            <div className="flex justify-end flex-col pb-6 pr-4 items-end">
                <div className="flex gap-2">
                    {children}
                    <Button fn={() => { }} variant='acceess'>
                        <p className='pointer-events-none'>Добавить</p></Button>
                </div>
            </div>
        </div>
    )
}
