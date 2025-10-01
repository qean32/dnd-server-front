import React from 'react'
import { Button, FileInput, TextInput } from '../ui'

interface Props {
}


export const CommentInput: React.FC<Props> = ({ }: Props) => {
    return (
        <div className="pt-5 flex justify-start items-center gap-2">
            <Button><FileInput /></Button>
            <TextInput placeHolder="ваш коментарий" validate={false} className='w-[70%]' />
            <Button><img src="/icon/send.svg" alt="" className="icon-md" /></Button>
        </div>
    )
}
