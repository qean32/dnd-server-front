import React from 'react'
import { cn } from '@lib/function'
import { Button } from '@component/ui'
import { SwithContentLiftSideGame } from './swith-content-tool-in-game'
import { SortableItem, DragHandle, UnwrapArray, UnwrapSortableArray } from './utils'
import { useAppSelector } from '@lib/castom-hook/redux'
import { mapsDataDto } from '@/model'
import { InToolEntityItem, InToolObjectItem, InToolCharacterItem } from '@component/ui/item'
import { characterDto, entityDto } from '@/model/entities.dto'

interface Props {
    mapsData: mapsDataDto
    characters: characterDto[]
    bestiary: entityDto[]
    id: number
}


export const SharedVariant: React.FC<Props> = ({
    mapsData,
    characters,
    bestiary,
    id
}: Props) => {
    const { session: sessionView } = useAppSelector(state => state.viewContent)

    return (<>
        <SwithContentLiftSideGame />
        <div className="h-full w-full overflow-hidden">
            <div
                className={
                    cn("flex h-full w-[400%] transition-700",
                        (sessionView == 'queue' && ''),
                        (sessionView == 'bestiary' && '-translate-x-1/4'),
                        (sessionView == 'objects' && '-translate-x-2/4'),
                        (sessionView == 'characters' && '-translate-x-3/4'),
                    )
                }>
                <UnwrapSortableArray
                    renderItem={(item) => (
                        <SortableItem item={item} id={item.id}>
                            <DragHandle />
                        </SortableItem>
                    )}
                    items={mapsData[id]?.queue}
                    title='ОЧЕРЕДЬ'
                />
                <UnwrapArray
                    renderItem={InToolEntityItem}
                    items={bestiary}
                    title='БЕСТИАРИЙ'
                />
                <UnwrapArray
                    renderItem={InToolObjectItem}
                    items={mapsData[id]?.objects}
                    title='ОБЬЕКТЫ'
                />
                <UnwrapArray
                    renderItem={InToolCharacterItem}
                    items={characters}
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
