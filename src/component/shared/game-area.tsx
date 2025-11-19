import React from 'react'
import { Stage, Layer, Group } from "react-konva"
import { TokenEntity, GameBGArea } from '@component/ui';
import { entityDto } from '@/model';
import { useAppSelector } from '@lib/castom-hook/redux';
import { useStage } from '@/lib/castom-hook';

interface Props {
}


export const GameArea: React.FC<Props> = ({ }: Props) => {
    const { session: { currentMap, mapsData } } = useAppSelector(state => state.session)
    const { handleWheel, stage } = useStage()


    return (
        <Stage
            onWheel={handleWheel}
            scaleX={stage.scale}
            scaleY={stage.scale}
            x={stage.x}
            y={stage.y}
            width={window.innerWidth}
            height={window.innerHeight - 64}
            draggable
        >
            <Layer>
                <Group>
                    <GameBGArea />

                    {[...mapsData[currentMap.name].entities].map((item: entityDto, _: number) => {
                        return <TokenEntity {...item} key={_} />
                    })}
                </Group>
            </Layer>
        </Stage>
    )
}
