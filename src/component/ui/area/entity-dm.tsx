import React from 'react'
import { Circle, Group } from "react-konva"
import { useToken } from '@lib/castom-hook';
import { entityDto } from '@/model';
import { useAppDispatch } from '@lib/castom-hook/redux';
import { getSizeInPixel } from '@/lib/function';
import Konva from 'konva'
import { Dead, Gray, Hidden } from './utils';

const restObject = {
    fillPatternRepeat: 'no-repeat',
    strokeWidth: 35,
    stroke: "#1f1f1f",
}


export const EntityDM: React.FC<Omit<entityDto, 'description'>> = (props: Omit<entityDto, 'description'>) => {
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
        <Group
            id={props.id.toString()}
            ref={rectRef}
            draggable={true}
            {...props.position}
            onClick={clickHandler}
            onDragEnd={dragEndHandler}
            onDragStart={dragStartHandler}
            onMouseOut={mouseOutHandler}
            onMouseOver={mouseOverHandler}
            onDragMove={dragMoveHandler}
            filters={props.status == 'hidden' ? [Konva.Filters.Grayscale] : []}
        >
            <Circle
                {...restObject}
                radius={image ? (image?.height > image.width ? image.width : image.height) / 2 : 0}
                fillPatternImage={image}
                fillPatternX={image ? -image?.width / 2 : 0}
                fillPatternY={image ? -image?.height / 2 : 0}
                scale={{
                    y: image ? ((getSizeInPixel(props.size) / 2) / ((image?.height > image.width ? image.width : image.height) / 2)) : 0,
                    x: image ? ((getSizeInPixel(props.size) / 2) / ((image?.height > image.width ? image.width : image.height) / 2)) : 0,
                }}
            />
            {(props.status == 'dead' || props.status == 'hidden') &&
                <Gray image={image} size={props.size} />}
            {props.status == 'hidden' && <Hidden size={props.size} />}
            {props.status == 'dead' && <Dead size={props.size} />}
        </Group>
    )
}