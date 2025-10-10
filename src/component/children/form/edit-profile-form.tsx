import React from 'react'
import { TextInput, Button, ImgInput } from '../../ui'

interface Props {
}


export const EditProfileForm: React.FC<Props> = ({ }: Props) => {
    return (
        <div className="w-1/2 h-full flex justify-center">
            <div className="fit-content flex flex-col gap-3">
                <p className="text-3xl">РЕДАКТОР</p>
                <div className="flex-1 w-[300px]">
                    <TextInput placeHolder="никнейм" />
                    <TextInput placeHolder="пароль" />
                </div>
                <ImgInput title='фото профиля' className='pl-1' />
                <Button children={<p>Редактировать</p>} className="bg-color px-4" />
            </div>
        </div>
    )
}
