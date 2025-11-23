import { Button, TextArea, TextInput } from '@/component/ui'
import { TypeUseBoolen } from '@/lib/castom-hook'
import React from 'react'

interface Props {
    children: React.ReactNode
    part: TypeUseBoolen
}


export const AddFromForm: React.FC<Props> = ({ children, part }: Props) => {
    return (
        <div className="w-1/2 flex-1 flex flex-col">
            <div className="flex-1 pt-15">
                <div className="h-[180px] flex justify-center items-start">
                    <div className="w-1/2 aspect-square bg-img rounded-full outline-bg-light"></div>
                </div>
                <div className='px-5'>
                    <TextInput placeHolder='Название' className='my-5' />
                    <div className="flex justify-between text-sm">
                        <p>Инициатива</p>
                        <TextInput className='w-[60px]' placeHolder='' validate={false} />
                    </div>
                    <TextArea title='Описание' className='h-[160px] overflow-scroll bg-color-dark p-4 py-2 my-2 mb-4' />
                </div>
            </div>
            <div className="flex justify-end flex-col pb-6 pr-4 items-end">
                <div className="flex gap-2 pb-1">
                    {children}
                    <Button fn={() => { }} variant='acceess'>
                        <p className='pointer-events-none'>Добавить</p></Button>
                </div>
                <Button variant='acceess' fn={part.on} className='mt-2 w-11/12'><p>Назад</p></Button>
            </div>
        </div>
    )
}
