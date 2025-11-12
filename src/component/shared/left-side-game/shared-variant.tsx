import React from 'react'
import { cn } from '../../../lib/function'
import { EntityItem, ObjectItem, Button } from '../../ui'
import { SwithContentLiftSideGame } from './swith-content-left-side-game'
import { UnwrapArray } from './unwrap-array'
import { useAppSelector } from '../../../lib/castom-hook/redux'
import { entityDto, objectDto } from '../../../model'

interface Props {
    mapsData: { [key: string]: { entities: entityDto[]; objects: objectDto[]; } }
    name: string
}


export const SharedVariant: React.FC<Props> = ({ mapsData, name }: Props) => {
    const { game: gameView } = useAppSelector(state => state.viewContent)

    return (<>
        <SwithContentLiftSideGame />
        <div className="h-full w-full overflow-hidden">
            <div
                className={
                    cn("flex h-full w-[400%] gap-1 transition-07",
                        (gameView == 'bestiary' && ''),
                        (gameView == 'objects' && '-translate-x-1/4'),
                        (gameView == 'characters' && '-translate-x-2/4'),
                        (gameView == 'queue' && '-translate-x-3/4'),
                    )
                }>
                <UnwrapArray
                    Component={EntityItem}
                    // @ts-ignore
                    array={mapsData[name].entities}
                    title='БЕСТИАРИЙ'
                />
                <UnwrapArray
                    Component={ObjectItem}
                    // @ts-ignore
                    array={mapsData[name].entities}
                    title='ОБЬЕКТЫ'
                />
                <UnwrapArray
                    Component={EntityItem}
                    // @ts-ignore
                    array={mapsData[name].entities}
                    title='ПЕРСОНАЖИ'
                />
                <UnwrapArray
                    Component={EntityItem}
                    // @ts-ignore
                    array={mapsData[name].entities}
                    title='ОЧЕРЕДЬ'
                />
            </div >
        </div>
        {gameView == 'queue' &&
            <div className='flex justify-center px-4 bg-color-dark pt-5'>
                <Button variant='acceess' className='w-full py-3'><p>следующий</p></Button>
            </div>}
    </>
    )
}
