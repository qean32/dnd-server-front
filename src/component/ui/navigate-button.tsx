import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './button'

interface Props {
    link: string
    path: string
}


export const NavigateButton: React.FC<Props> = ({ link, path }: Props) => {
    return (
        <Link to={link}>
            <Button className='link-line relative'>
                <img src={path} />
                <div className="w-[5px] h-[4px] absolute bottom-0 transition03 left-1/2 -translate-x-1/2 bg-white"></div>
            </Button>
        </Link>
    )
}
