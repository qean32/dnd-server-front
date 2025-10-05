import React from 'react'
import { useDraggable } from '../lib/castom-hook'

interface Props {
}


export const Token: React.FC<Props> = ({ }: Props) => {
    const { dragEndHandler, ref } = useDraggable()

    return (
        <div
            ref={ref}
            draggable
            className="p-5 fixed bg-color-dark z-30"
            onDragEnd={dragEndHandler}
        >zxc</div>
    )
}
