import React from 'react'
import { Image } from 'react-konva'
import useImage from 'use-image';
import { useAppSelector } from '@lib/castom-hook/redux';

interface Props {
}


export const GameBackground: React.FC<Props> = ({ }: Props) => {
    const { session: { currentMap } } = useAppSelector(state => state.session)
    const [bgGameArea] = useImage(currentMap.path, 'anonymous');


    return <Image
        image={bgGameArea}
        // width={currentMap.siz/e.x}
        // height={currentMap.size.y}
        y={0}
        x={0}
        cornerRadius={[10, 10, 10, 10]}
    />;
}
