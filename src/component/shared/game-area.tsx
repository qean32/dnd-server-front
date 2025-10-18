import React from 'react'

interface Props {
}


export const GameArea: React.FC<Props> = ({ }: Props) => {
    const ref = React.useRef(null)

    React.useEffect(() => {
        
    }, [])

    return (
        <canvas ref={ref} />
    )
}
