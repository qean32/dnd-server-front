import React from 'react'

interface Props {
    tag: {
        color: string,
        text: string
    }
}


export const Tag: React.FC<Props> = ({ tag: { color, text } }: Props) => {
    return (
        <div className='tag' style={{ backgroundColor: `${color}` }}>
            <p>{text}</p>
        </div>
    )
}
