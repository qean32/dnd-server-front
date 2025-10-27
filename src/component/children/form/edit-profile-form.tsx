import React from 'react'
import { TextInput, Button, ImgInput } from '../../ui'
import { Link } from 'react-router-dom'

interface Props {
}


export const EditProfileForm: React.FC<Props> = ({ }: Props) => {
    return (
        <div className="w-1/2 h-full flex justify-center">
            <div className="w-fit flex flex-col gap-3">
                <p className="text-3xl pl-0.5">РЕДАКТОР</p>
                <div className="flex-1 w-[300px] pt-2 flex flex-col justify-between pb-3">
                    <div className="flex gap-2 flex-col">
                        <TextInput placeHolder="никнейм" />
                        <ImgInput title='фото профиля' className='pl-1' />
                    </div>
                    <Link to={'/change-password'} className='pl-1 cursor-pointer'>Изменить пароль</Link>
                </div>
                <Button className="px-5 py-3" variant='acceess' children={<p>Редактировать</p>} />
            </div>
        </div>
    )
}
