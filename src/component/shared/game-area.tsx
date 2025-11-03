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
    const [image] = useImage("/img/dnd+.jpg");
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
                    x={200}
                    y={200}
                    radius={image ? image?.height / 2 : 0}
                    fillPatternImage={image}
                    // fillPatternOffset={{ x: 0, y: 0 }}
                    fillPatternX={image ? -image?.width / 2 : 0}
                    fillPatternY={image ? -image?.height / 2 : 0}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                    fillPatternRepeat='no-repeat'
                    draggable
                    strokeWidth={1} // border width
                    stroke="white" // border color
                />
                <Group
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                    draggable
                >
                    <Image
                        opacity={0.1}
                        image={image}
                        width={500}
                        height={image ? (image.height / image.width) * 500 : 0}

                        offsetX={500 / 2}
                        offsetY={image ? ((image.height / image.width) * 500) / 2 : 0}
                    />
                    <Circle
                        opacity={0.2}
                        stroke="white"
                        strokeWidth={1}
                        width={500}
                        height={image ? (image.height / image.width) * 500 : 0}
                    />
                </Group>
            </Layer>
        </Stage>
    )
}
