import React from 'react'

interface Props {
}


export const DangerIcon: React.FC<Props> = ({ }: Props) => {
    return (
        <img src="/icon/danger-info.svg" className='icon-sm cursor-pointer' alt="" />
    )
}
