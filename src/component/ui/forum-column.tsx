import React from 'react'
import { cn } from '../../lib/function'

interface Props {
    className?: string
}


export const ForumColumn: React.FC<Props> = ({ className }: Props) => {
    return (
        <div className={cn("py-3 grid", className)} style={{ gridTemplateColumns: '5fr 1fr 1fr 1fr' }}>
            <p>Тема & Описание</p>
            <p>Автор</p>
            <p>Раздел</p>
            <p>Просмотры</p>
        </div>
    )
}
