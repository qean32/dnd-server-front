import React from 'react'
import { Stage, Layer, Group, Rect } from "react-konva"
import { TokenEntity } from '../ui';
import { entityDto } from '../../model';
import useImage from 'use-image';
import { useAppSelector } from '../../lib/castom-hook/redux';

interface Props {
}


export const GameArea: React.FC<Props> = ({ }: Props) => {
    const { game: { currentMap, mapsData } } = useAppSelector(state => state.game)
    const [bgGameArea] = useImage(currentMap.path);
    const [bgGrid] = useImage('/icon/grid.svg');

    return (
        <Stage width={window.innerWidth} height={window.innerHeight - 64}>
            <Layer>
                <Group draggable>
                    <Group>
                        <Rect
                            y={((window.innerHeight / 2) - currentMap.size.y / 2) - 64 /* header height */}
                            x={(window.innerWidth / 2) - currentMap.size.x / 2}
                            fillPatternRepeat='no-repeat'
                            fillPatternImage={bgGameArea}
                            width={currentMap.size.x}
                            height={currentMap.size.y}
                            cornerRadius={[10, 10, 10, 10]}
                        />
                        <Rect
                            visible={false}
                            y={((window.innerHeight / 2) - currentMap.size.y / 2) - 64 /* header height */}
                            x={(window.innerWidth / 2) - currentMap.size.x / 2}
                            fillPatternImage={bgGrid}
                            width={currentMap.size.x}
                            height={currentMap.size.y}
                            cornerRadius={[10, 10, 10, 10]}
                        />
                    </Group>

                    {[...mapsData[currentMap.name].entities].map((item: entityDto, _: number) => {
                        return <TokenEntity {...item} key={_} />
                    })}
                </Group>
            </Layer>
        </Stage>
    )
}
