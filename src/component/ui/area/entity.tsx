import React from 'react'
import { Circle } from "react-konva"
import { useToken } from '@lib/castom-hook';
import { entityDto } from '@/model';
import { useAppDispatch } from '@lib/castom-hook/redux';
import { getSizeInPixel } from '@/lib/function';

const restObject = {
    fillPatternRepeat: 'no-repeat',
    strokeWidth: 15,
    stroke: "#1f1f1f",
}


export const Entity: React.FC<entityDto> = React.memo((props: entityDto) => {
    const dispath = useAppDispatch()
    const {
        clickHandler,
        dragEndHandler,
        dragStartHandler,
        mouseOutHandler,
        mouseOverHandler,
        dragMoveHandler,
        image,
        rectRef
    } = useToken(dispath, props.path)

    return (
        <Circle
            id={props.id.toString()}
            ref={rectRef}
            draggable={true}
            visible={props.status != 'hidden'}
            {...restObject}
            {...props.position}
            radius={image ? (image?.height > image.width ? image.width : image.height) / 2 : 0}
            fillPatternImage={image}
            fillPatternX={image ? -image?.width / 2 : 0}
            fillPatternY={image ? -image?.height / 2 : 0}
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
        />
    )
})
