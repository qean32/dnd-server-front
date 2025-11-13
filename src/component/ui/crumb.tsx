import React from 'react'
import { Link } from 'react-router-dom'

interface Props {
}


export const Crumb: React.FC<Props> = ({ }: Props) => {
    return (
        <div className="flex items-center w-fit py-3 rounded-sm gap-2">
            <Link to={'/forum'}><p>Форум</p></Link>
            <img src="/icon/double-arrow.svg" className="icon-sm- rotate-180 opacity-50" />
            <Link to={'/department/d&d'}><p>D&D</p></Link>
            <img src="/icon/double-arrow.svg" className="icon-sm- rotate-180 opacity-50" />
            <p className="cursor-pointer">Как развивается d&d сообщество</p>
        </div>
    )
}
