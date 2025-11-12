import React from 'react'
import { Link } from 'react-router-dom'

interface Props {
}


export const BanReason: React.FC<Props> = ({ }: Props) => {
    return (
        <div className="bg-color-dark rounded-sm p-5 mb-2">
            <p>ПРИЧИНЫ БЛОКИРОВКИ</p>
            <div className="grid grid-cols-2">
                <p>дата блокировки: </p>
                <p>20.11.2025</p>
                <p>время до разблокировки:</p>
                <p>14 лет</p>
                <p>администратор выдавший блокировку:</p>
                <Link to={''}>zxccursed</Link>
                <p>причина:</p>
                <p>нарушение правил сообщесва</p>
            </div>
        </div>
    )
}
