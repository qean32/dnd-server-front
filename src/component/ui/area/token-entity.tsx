import React, { memo } from 'react'
import { Circle, Transformer } from "react-konva"
import { useToken } from '../../../lib/castom-hook';

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


export const TokenEntity: React.FC<any> = memo(({ id, path, position, view, size }: any) => {
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
    } = useToken(path)

    return (
        <>
            <Circle
                id={id.toString()}
                ref={rectRef}
                draggable={true}
                visible={view}
                {...restObject}
                {...position}
                radius={image ? (image?.height > image.width ? image.width : image.height) / 2 : 0}
                fillPatternImage={image}
                fillPatternX={image ? -image?.width / 2 : 0}
                fillPatternY={image ? -image?.height / 2 : 0}
                scale={{
                    y: image ? ((size / 2) / ((image?.height > image.width ? image.width : image.height) / 2)) : 0,
                    x: image ? ((size / 2) / ((image?.height > image.width ? image.width : image.height) / 2)) : 0,
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
                anchorDragBoundFunc={(_, newPos) => {
                    const dist = Math.sqrt(Math.pow(newPos.x - window.innerWidth / 2, 2));
                    if (dist < 10) {
                        return {
                            ...newPos,
                            x: window.innerWidth / 2,
                        };
                    }
                    return newPos;
                }}
                onTransformEnd={() => { console.log('transEnd') }}
                {...restObjectTransform}
            />
        </>
    )
})
