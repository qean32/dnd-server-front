import { UploadImgArea, Button, TextInput } from '@/component/ui'
import React from 'react'

interface Props {
    children: React.ReactNode
}


export const AddFromForm: React.FC<Props> = ({ children }: Props) => {
    return (
        <div className="w-1/2 flex-1 flex flex-col">
            <div className="flex-1">

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
