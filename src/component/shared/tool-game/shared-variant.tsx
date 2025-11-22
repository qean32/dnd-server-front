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
    const { session: sessionView } = useAppSelector(state => state.viewContent)

    return (<>
        <SwithContentLiftSideGame />
        <div className="h-full w-full overflow-hidden">
            <div
                className={
                    cn("flex h-full w-[400%] transition-07",
                        (sessionView == 'queue' && ''),
                        (sessionView == 'objects' && '-translate-x-3/4'),
                        (sessionView == 'characters' && '-translate-x-2/4'),
                        (sessionView == 'bestiary' && '-translate-x-1/4'),
                    )
                }>
                <UnwrapArray
                    renderItem={InToolEntityItem}
                    items={mapsData[name].entities}
                    title='ОЧЕРЕДЬ'
                />
                <UnwrapArray
                    renderItem={InToolEntityItem}
                    items={mapsData[name].entities}
                    title='БЕСТИАРИЙ'
                />
                <UnwrapArray
                    renderItem={InToolObjectItem}
                    items={mapsData[name].entities}
                    title='ОБЬЕКТЫ'
                />
                <UnwrapArray
                    renderItem={InToolCharacterItem}
                    items={mapsData[name].entities}
                    title='ПЕРСОНАЖИ'
                />
            </div >
        </div>
        {sessionView == 'queue' &&
            <div className='flex justify-center px-4 bg-color-dark pt-5'>
                <Button variant='acceess' className='w-full py-3'><p>следующий</p></Button>
            </div>}
    </>
    )
}
