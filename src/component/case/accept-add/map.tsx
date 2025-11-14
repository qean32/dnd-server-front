import React from 'react'
import { UploadImgArea, TextInput } from '@component/ui'
import { useAppSelector } from '@/lib/castom-hook/redux'

interface Props {
    children: React.ReactNode
}


export const AddMap: React.FC<Props> = ({ children }: Props) => {
    const { object } = useAppSelector(state => state.addedObject)

    return (
        <div className="w-3/12 h-full flex flex-col">
            <UploadImgArea className='h-1/3 w-full mt-10' dftBG_={object?.path ?? ''} />
            {object?.path}
            <TextInput className='mx-5' placeHolder='Название' />
            <p className='pl-5 pb-2'>Размеры карты</p>
            <div className="flex items-center pb-5">
                <TextInput validate={false} className='mx-5' placeHolder='x' />
                x
                <TextInput validate={false} className='mx-5' placeHolder='y' />
            </div>
            <div className="flex-1 flex justify-end flex-col pb-5 items-end px-5">
                {children}
            </div>
        </div>
    )
}
