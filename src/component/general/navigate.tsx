import React from 'react'
import { cn } from '../../lib/function'
import { Link } from 'react-router-dom'

interface Props {
    className?: string
}


export const Navigate: React.FC<Props> = ({ className }: Props) => {
    return (
        <div className={cn('fixed bottom-0 flex gap-2 right-2', className)}>
            <Link to={'/'}>главная</Link>
            <Link to={'/posts'}>посты</Link>
            <Link to={'/post/1'}>пост</Link>
            <Link to={'/community'}>сообщество</Link>
            <Link to={'/game/1'}>игра</Link>
            <Link to={'/auth'}>вход</Link>
            <Link to={'/create-post'}>создать пост</Link>
            <Link to={'/profile/1'}>профиль</Link>
            <Link to={'/edit-profile'}>редактор профиля</Link>
        </div>
    )
}
