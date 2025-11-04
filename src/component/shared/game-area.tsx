import React from 'react'
import { Stage, Layer, Group, Rect } from "react-konva"
import { TokenEntity } from '../ui';
import { entityDto, gameDto } from '../../model';
import { gameStorage } from '../../export';
import useImage from 'use-image';

interface Props {
}


export const GameArea: React.FC<Props> = ({ }: Props) => {
    const [game] = React.useState<gameDto>(JSON.parse(localStorage.getItem(gameStorage) as string))
    const [image] = useImage(game.currentMap.path);

    return (
        <Stage width={window.innerWidth} height={window.innerHeight}>
            <Layer>
                <Group
                    draggable
                >
                    <Rect
                        y={((window.innerHeight / 2) - game.currentMap.size.y / 2) - 64 /* header height */}
                        x={(window.innerWidth / 2) - game.currentMap.size.x / 2}
                        fillPatternRepeat='no-repeat'
                        fillPatternImage={image}
                        width={game.currentMap.size.x}
                        height={game.currentMap.size.y}
                    />

                    {game.mapsData[game.currentMap.name].entities.map((item: entityDto, _: number) => {
                        return <TokenEntity {...item} key={_} />
                    })}
                </Group>
            </Layer>
        </Stage>
    )
}
