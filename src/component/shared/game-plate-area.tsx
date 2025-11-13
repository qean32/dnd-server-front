import React from 'react'
import { Group, Rect } from 'react-konva'
import useImage from 'use-image';
import { useAppSelector } from '../../lib/castom-hook/redux';

interface Props {
}


export const GamePlateArea: React.FC<Props> = ({ }: Props) => {
    const { game: { currentMap } } = useAppSelector(state => state.game)
    const [bgGameArea] = useImage(currentMap.path);
    const [bgGrid] = useImage('/icon/grid.svg');

    return (
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
    )
}
