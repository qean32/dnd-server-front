import React from 'react'
import { Stage, Layer, Group } from "react-konva"
import { TokenEntity, GameBGArea } from '@component/ui';
import { entityDto } from '@/model';
import { useAppSelector } from '@lib/castom-hook/redux';

interface Props {
}


export const GameArea: React.FC<Props> = ({ }: Props) => {
    const { session: { currentMap, mapsData } } = useAppSelector(state => state.session)

    return (
        <Stage width={window.innerWidth} height={window.innerHeight - 64}>
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
