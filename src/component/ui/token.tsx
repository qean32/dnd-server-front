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
                    className="fixed grab bg-color-dark z-30 transition03 bg-img rounded-lg w-[52px]"
                    style={{ backgroundImage: `url(${entity.path})`, ...entity.position, aspectRatio: '1/1' }}
                    onDragEnd={dragEndHandler}
                >
                    <p hidden className='absolute -bottom-2 left-1/2 -translate-x-1/2'>{entity.status}</p>
                </div>
            }
        </>
    )
}
