import React from 'react'
import { useDraggable } from '../../lib/castom-hook'
import { entityDto } from '../../model'

interface Props {
    entity?: entityDto
}


export const TokenGame: React.FC<Props> = ({ entity = {
    discription: 'no',
    id: 1,
    path: '/img/goblin.jpg',
    name: "Гоблин",
    position: { left: 0, top: 0 },
    status: 'live',
    view: true
} }: Props) => {
    const { dragEndHandler, ref } = useDraggable()

    return (
        <>
            {entity.view &&
                <div
                    draggable
                    ref={ref}
                    className="fixed border-2 border-gray-500 cursor-pointer bg-color-dark z-30 transition03 bg-img rounded-4xl w-[60px] aspect-square"
                    style={{ backgroundImage: `url(${entity.path})`, ...entity.position }}
                    onDragEnd={dragEndHandler}
                >
                    <p hidden className='absolute -bottom-2 left-1/2 -translate-x-1/2'>{entity.status}</p>
                </div>
            }
        </>
    )
}
