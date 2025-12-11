import React from 'react'
import { Stage, Layer, Group } from "react-konva"
import { EntityDM, GameBackground } from '@component/ui/area';
import { useAppSelector } from '@lib/castom-hook/redux';
import { useStage } from '@/lib/castom-hook';

interface Props {
}


export const GameArea: React.FC<Props> = ({ }: Props) => {
    const { session: { currentMap: { id }, mapsData } } = useAppSelector(state => state.session)
    const { handleWheel, stage } = useStage()
    const [entities, setEntities] = React.useState(mapsData[id].queue)
    React.useEffect(() => {
        setEntities(mapsData[id].queue)
    }, [id, mapsData[id]])

    return (
        <Stage
            onWheel={handleWheel}
            scaleX={stage.scale}
            scaleY={stage.scale}
            x={stage.x}
            y={stage.y}
            onDragMove={() => { }}
            onDragEnd={() => { }}
            onDragStart={() => { }}
            width={window.innerWidth}
            height={window.innerHeight - 64}
            draggable
        >
            <Layer>
                <Group>
                    <GameBackground />
                </Group>
                {!!entities.length &&
                    entities.map((item) => {
                        return <EntityDM {...item} key={item.id} />
                    })
                }
                {!!mapsData[id].objects.length &&
                    mapsData[id].objects.map((item) => {
                        return <></>
                        // <ObjectDM {...item} key={item.id} />
                    })
                }
            </Layer>
        </Stage>
    )
}