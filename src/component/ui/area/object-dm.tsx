import { useDMObject } from '@/lib/castom-hook/area'
import { useAppDispatch } from '@/lib/castom-hook/redux'
import { getSizeInPixel } from '@/lib/function'
import { objectDto } from '@/model'
import React from 'react'
import { Image } from 'react-konva'

interface Props extends objectDto {
}


export const ObjectDM: React.FC<Props> = (props: Props) => {
    const dispath = useAppDispatch()
    const {
        clickHandler,
        dragEndHandler,
        dragMoveHandler,
        dragStartHandler,
        image,
        mouseOutHandler,
        mouseOverHandler,
    } = useDMObject(dispath, props.path)

    return (
        <>
            <Image
                visible={props.status != 'hidden'}
                {...props.position}
                id={props.id.toString()}
                scale={{
                    y: image ? ((getSizeInPixel(props.size) / 2) / ((image?.height > image.width ? image.width : image.height) / 2)) : 0,
                    x: image ? ((getSizeInPixel(props.size) / 2) / ((image?.height > image.width ? image.width : image.height) / 2)) : 0,
                }}
                onClick={clickHandler}
                onDragEnd={dragEndHandler}
                onDragStart={dragStartHandler}
                onMouseOut={mouseOutHandler}
                onMouseOver={mouseOverHandler}
                onDragMove={dragMoveHandler}
                draggable={true}
                image={image}
            />
        </>
    )
}
