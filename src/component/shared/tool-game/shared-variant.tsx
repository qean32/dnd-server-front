import React from 'react'
import { cn } from '@lib/function'
import { Button } from '@component/ui'
import { SwithContentLiftSideGame } from './swith-content-tool-in-game'
import { UnwrapArray } from './unwrap-array'
import { useAppSelector } from '@lib/castom-hook/redux'
import { entityDto, objectDto } from '@/model'
import { InToolEntityItem, InToolObjectItem, InToolCharacterItem } from '@component/ui/item'

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
                    component={InToolEntityItem}
                    array={mapsData[name].entities}
                    title='БЕСТИАРИЙ'
                />
                <UnwrapArray
                    component={InToolObjectItem}
                    array={mapsData[name].entities}
                    title='ОБЬЕКТЫ'
                />
                <UnwrapArray
                    component={InToolCharacterItem}
                    array={mapsData[name].entities}
                    title='ПЕРСОНАЖИ'
                />
                <UnwrapArray
                    component={InToolEntityItem}
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
