import React from 'react'
import useImage from 'use-image';
import { Stage, Layer, Group, Rect, Image, Circle } from "react-konva"

interface Props {
}

// @ts-ignore
const URLImage = ({ src, ...rest }) => {
    const [image] = useImage(src, 'anonymous');
    return <Image image={image} {...rest} />;
};


export const GameArea: React.FC<Props> = ({ }: Props) => {
    const [image] = useImage("/img/dnd3.jpg");
    const handleMouseOver = (e: any) => {
        e.target.getStage().container().style.cursor = 'pointer';
    };

    const handleMouseOut = (e: any) => {
        e.target.getStage().container().style.cursor = 'default';
    };

    return (
        <Stage width={window.innerWidth} height={window.innerHeight}>
            <Layer>
                <Circle
                    x={500}
                    y={200}
                    radius={image ? (image?.height > image.width ? image.width : image.height) / 2 : 0}
                    fillPatternImage={image}
                    // fillPatternOffset={{ x: 0, y: 0 }}
                    fillPatternX={image ? -image?.width / 2 : 0}
                    fillPatternY={image ? -image?.height / 2 : 0}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                    fillPatternRepeat='no-repeat'
                    draggable
                    onClick={(e) => { console.log(e) }}
                    strokeWidth={1} // border width
                    stroke="white" // border color
                    scale={{
                        y: image ? (40 / ((image?.height > image.width ? image.width : image.height) / 2)) : 0,
                        x: image ? (40 / ((image?.height > image.width ? image.width : image.height) / 2)) : 0,
                    }}
                />
            </Layer>
        </Stage>
    )
}
