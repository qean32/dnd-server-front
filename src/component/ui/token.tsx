import React from 'react'
import { useDraggable } from '../../lib/castom-hook'
import { entityDto } from '../../model'

interface Props {
    entity?: entityDto
}


export const Token: React.FC<Props> = ({ entity = {
    discription: 'no',
    id: 1,
    path: '/img/goblin.jpg',
    position: { left: 0, top: 0 },
    status: 'live'
} }: Props) => {
    const { dragEndHandler, ref } = useDraggable()

    return (
        <div
            draggable
            ref={ref}
            className="p-5 fixed bg-color-dark z-30 transition03 bg-img rounded-xl"
            style={{ backgroundImage: `url(${entity.path})`, ...entity.position }}
            onDragEnd={dragEndHandler}
        ></div>
    )
}
