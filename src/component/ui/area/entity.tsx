import React from 'react'
import { Circle, Transformer } from "react-konva"
import { useToken } from '@lib/castom-hook';
import { entityDto } from '@/model';
import { useAppDispatch } from '@lib/castom-hook/redux';

const restObject = {
    fillPatternRepeat: 'no-repeat',
    strokeWidth: 15,
    stroke: "white",
}

const restObjectTransform = {
    borderStroke: "#000",
    borderStrokeWidth: 1,
    anchorFill: "#fff",
    anchorStroke: "#000",
    anchorStrokeWidth: 1,
    anchorSize: 10,
    anchorCornerRadius: 1,
}


export const Entity: React.FC<entityDto> = (props: entityDto) => {
    const dispath = useAppDispatch()
    const {
        clickHandler,
        dragEndHandler,
        dragStartHandler,
        mouseOutHandler,
        mouseOverHandler,
        dragMoveHandler,
        image,
        rectRef,
        trRef,
        viewTransform
    } = useToken(dispath, props.path)


    return (
        <>
            <Circle
                id={props.id.toString()}
                ref={rectRef}
                draggable={true}
                visible={props.view}
                {...restObject}
                {...props.position}
                radius={image ? (image?.height > image.width ? image.width : image.height) / 2 : 0}
                fillPatternImage={image}
                fillPatternX={image ? -image?.width / 2 : 0}
                fillPatternY={image ? -image?.height / 2 : 0}
                scale={{
                    y: image ? ((props.size / 2) / ((image?.height > image.width ? image.width : image.height) / 2)) : 0,
                    x: image ? ((props.size / 2) / ((image?.height > image.width ? image.width : image.height) / 2)) : 0,
                }}

                onClick={clickHandler}
                onDragEnd={dragEndHandler}
                onDragStart={dragStartHandler}
                onMouseOut={mouseOutHandler}
                onMouseOver={mouseOverHandler}
                onDragMove={dragMoveHandler}
            />

            <Transformer
                ref={trRef}
                visible={viewTransform}
                boundBoxFunc={(oldBox, newBox) => {
                    if (newBox.width > 100) {
                        return oldBox;
                    }
                    if (newBox.width < 70) {
                        return oldBox;
                    }
                    return newBox;
                }}
                onTransformEnd={(e) => { console.log(e) }}
                {...restObjectTransform}
            />
        </>
    )
}
