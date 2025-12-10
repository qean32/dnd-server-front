import React from 'react'
import { Circle, Group } from "react-konva"
import { useToken } from '@lib/castom-hook';
import { entityDto } from '@/model';
import { useAppDispatch } from '@lib/castom-hook/redux';
import { getSizeInPixel } from '@/lib/function';
import useImage from 'use-image';
import Konva from 'konva'

const restObject = {
    fillPatternRepeat: 'no-repeat',
    strokeWidth: 35,
    stroke: "#1f1f1f",
}


export const EntitySubscriber: React.FC<entityDto> = (props: entityDto) => {
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
    const [dead] = useImage('/icon/dead.png')
    const [chart] = useImage('/icon/chart.png')
    React.useEffect(() => {
        if (image && props.status == 'hidden') {
            // rectRef.current.cache();
        }
    }, [image]);


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
            {
                (props.status == 'dead' || props.status == 'hidden') &&
                <Circle
                    {...restObject}
                    radius={image ? (image?.height > image.width ? image.width : image.height) / 2 : 0}
                    opacity={.7}
                    fill={'#1f1f1f'}
                    scale={{
                        y: image ? ((getSizeInPixel(props.size) / 2) / ((image?.height > image.width ? image.width : image.height) / 2)) : 0,
                        x: image ? ((getSizeInPixel(props.size) / 2) / ((image?.height > image.width ? image.width : image.height) / 2)) : 0,
                    }}
                />
            }
            {
                props.status == 'hidden' &&
                <Circle
                    radius={chart ? (chart?.height > chart.width ? chart.width : chart.height) / 2 : 0}
                    rotation={-45}
                    fillPatternImage={chart}
                    fillPatternX={chart ? -chart?.width / 2 : 0}
                    fillPatternY={chart ? -chart?.height / 2 : 0}
                    scale={{
                        y: chart ? ((getSizeInPixel(props.size) / 2) / ((chart?.height > chart.width ? chart.width : chart.height) / 2)) : 0,
                        x: chart ? ((getSizeInPixel(props.size) / 2) / ((chart?.height > chart.width ? chart.width : chart.height) / 2)) : 0,
                    }}
                />
            }
            {
                props.status == 'dead' &&
                <Circle
                    radius={dead ? (dead?.height > dead.width ? dead.width : dead.height) / 2 : 0}
                    fillPatternImage={dead}
                    fillPatternX={dead ? -dead?.width / 2 : 0}
                    fillPatternY={dead ? -dead?.height / 2 : 0}
                    scale={{
                        y: dead ? ((getSizeInPixel(props.size) / 2) / ((dead?.height > dead.width ? dead.width : dead.height) / 2)) * .8 : 0,
                        x: dead ? ((getSizeInPixel(props.size) / 2) / ((dead?.height > dead.width ? dead.width : dead.height) / 2)) * .8 : 0,
                    }}
                />
            }
        </Group>
    )
}

/**
 *         div {
            height: 100px;
            background: linear-gradient(135deg,
                    rgb(0, 0, 0) 0%,
                    rgb(0, 0, 0) 10%,
                    rgb(255, 255, 255) 11%,
                    rgb(255, 255, 255) 20%,
                    rgb(0, 0, 0) 21%,
                    rgb(0, 0, 0) 30%,
                    rgb(255, 255, 255) 31%,
                    rgb(255, 255, 255) 40%,
                    rgb(0, 0, 0) 21%,
                    rgb(0, 0, 0) 30%,
                    rgb(255, 255, 255) 31%,
                    rgb(255, 255, 255) 40%,
                    rgb(0, 0, 0) 21%,
                    rgb(0, 0, 0) 30%,
                    rgb(255, 255, 255) 41%,
                    rgb(255, 255, 255) 50%,
                    rgb(0, 0, 0) 21%,
                    rgb(0, 0, 0) 30%,
                    rgb(255, 255, 255) 51%,
                    rgb(255, 255, 255) 60%,
                    rgb(0, 0, 0) 21%,
                    rgb(0, 0, 0) 30%, );
            /* filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#06c9b2', endColorstr='#a9e3f5', GradientType=1);
        } */