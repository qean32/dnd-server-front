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
    const [bgGameArea] = useImage(game.currentMap.path);
    const [bgGrid] = useImage('/icon/grid.svg');

    return (
        <Stage width={window.innerWidth} height={window.innerHeight - 64}>
            <Layer>
                <Group draggable>
                    <Group>
                        <Rect
                            y={((window.innerHeight / 2) - game.currentMap.size.y / 2) - 64 /* header height */}
                            x={(window.innerWidth / 2) - game.currentMap.size.x / 2}
                            fillPatternRepeat='no-repeat'
                            fillPatternImage={bgGameArea}
                            width={game.currentMap.size.x}
                            height={game.currentMap.size.y}
                            cornerRadius={[10, 10, 10, 10]}
                        />
                        <Rect
                            visible={false}
                            y={((window.innerHeight / 2) - game.currentMap.size.y / 2) - 64 /* header height */}
                            x={(window.innerWidth / 2) - game.currentMap.size.x / 2}
                            fillPatternImage={bgGrid}
                            width={game.currentMap.size.x}
                            height={game.currentMap.size.y}
                            cornerRadius={[10, 10, 10, 10]}
                        />
                    </Group>

                    {game.mapsData[game.currentMap.name].entities.map((item: entityDto, _: number) => {
                        return <TokenEntity {...item} key={_} />
                    })}
                </Group>
            </Layer>
        </Stage>
    )
}
