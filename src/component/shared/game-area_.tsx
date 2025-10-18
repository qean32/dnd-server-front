import React from 'react'
import { useGame } from '../../lib/castom-hook'

interface Props {
}


export const GameArea: React.FC<Props> = ({ }: Props) => {
    const { mouseDownHandler, mouseMoveHandler, mouseUpHandler, ref } = useGame()

    return (
        <canvas
            // style={{ backgroundImage: 'url(/img/bg-f.jpg)' }}
            style={{ position: 'fixed' }}
            // @ts-ignore
            ref={ref}
            width={window.innerWidth}
            height={window.innerHeight}
            onMouseDown={mouseDownHandler}
            onMouseMove={mouseMoveHandler}
            onMouseUp={mouseUpHandler}
            className='bz-0 transition03 rounded-lg fixed overflow-hidden'
        >
        </canvas>
    )
}
