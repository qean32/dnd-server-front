import React from 'react'

interface Props {
}


export const ProfileContentSwith: React.FC<Props> = ({ }: Props) => {
    return (
        <div className="mt-5 flex gap-2 pt-3 pb-2 w-[100%]">
            <p className="cursor-pointer text-xl font-bold" >Персонажи</p>
            <p className="cursor-pointer text-xl" >Посты</p>
            <p className="cursor-pointer text-xl" >Игры</p>
        </div>
    )
}
