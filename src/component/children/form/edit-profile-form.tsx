import React from 'react'
import { TextInput, Button, ImgInput } from '../../ui'

interface Props {
}


export const EditProfileForm: React.FC<Props> = ({ }: Props) => {
    return (
        <div className="w-1/2 h-full flex justify-center">
            <div className="w-fit flex flex-col gap-3">
                <p className="text-3xl pl-0.5">РЕДАКТОР</p>
                <div className="flex-1 w-[300px] pt-2 flex flex-col justify-between pb-3">
                    <div className="">
                        <TextInput placeHolder="никнейм" />
                        <p className='pl-1 cursor-pointer'>Изменить пароль</p>
                    </div>
                    <ImgInput title='фото профиля' className='pl-1' />
                </div>
                <Button children={<p>Редактировать</p>} className="bg-color px-4" />
            </div>
        </div>
    )
}
