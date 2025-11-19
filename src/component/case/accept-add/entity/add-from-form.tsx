import { Button, TextInput } from '@/component/ui'
import React from 'react'

interface Props {
    children: React.ReactNode
}


export const AddFromForm: React.FC<Props> = ({ children }: Props) => {
    return (
        <div className="w-1/2 flex-1 flex flex-col">
            <div className="flex-1">
                <div className="h-6/12 flex justify-center items-center pt-5">
                    <div className="w-1/2 aspect-square bg-img rounded-full outline-bg-light"></div>
                </div>
                <div className='px-5'>
                    <TextInput className='mb-5' placeHolder='Название' />
                    <div className="flex justify-between text-sm">
                        <p>Инициатива</p>
                        <TextInput className='w-[60px]' placeHolder='' />
                    </div>
                    <p className='pt-4 text-sm text-justify'></p>
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
