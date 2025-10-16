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
            <Button>
                <div className='flex flex-col relative link-line'>
                    <img src={path} />
                    <div className="w-[6px] h-[3px] absolute -bottom-2.5 transition03 left-1/2 -translate-x-1/2 bg-white"></div>
                </div>
            </Button>
        </Link>
    )
}
