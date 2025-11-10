import React from 'react'
import { cn } from '../../lib/function'
import { Button, ButtonInGroup, EntityItem } from '../ui'
import { useBoolean } from '../../lib/castom-hook'
import { useAppSelector } from '../../lib/castom-hook/redux'

interface Props {
    className?: string
}


export const LeftSideGame: React.FC<Props> = ({ className }: Props) => {
    const { boolean, swap } = useBoolean(false)
    const { game: { currentMap: { name }, mapsData } } = useAppSelector(state => state.game)

    return (
        <div className={cn('fixed z-10 w-[16%] h-[100%] bg-color-dark transition-07 pt-14 pb-3 flex flex-col', (!boolean && 'w-[55px]'), className)}>
            {boolean &&
                <div className='relative'>
                    <ButtonInGroup className='absolute right-0 translate-x-11/12 bg-color-dark rounded-sm bg-color-dark-hover top-2' fn={swap}>
                        <img src='/icon/double-arrow.svg' className={cn('bg-color-dark rounded-r-sm icon-sm')} />
                    </ButtonInGroup>
                </div>
            }
            {boolean &&
                <>
                    <div className='flex justify-between pt-2'>
                        <ButtonInGroup className='px-4' fn={() => { }} ><img className='icon-sm' src='/icon/dragon.svg' /></ButtonInGroup>
                        <ButtonInGroup className='px-4' fn={() => { }} ><img className='icon-sm' src='/icon/object.svg' /></ButtonInGroup>
                        <ButtonInGroup className='px-4' fn={() => { }} ><img className='icon-sm' src='/icon/human.svg' /></ButtonInGroup>
                        <ButtonInGroup className='px-4' fn={() => { }}><img className='icon-sm' src='/icon/dice-6.svg' /></ButtonInGroup>
                        <ButtonInGroup className='px-4' fn={() => { }} ><img className='icon-sm' src='/icon/queue.svg' /></ButtonInGroup>
                    </div>
                    <div className='flex-1 pt-2 max-h-11/12 overflow-scroll'>
                        <p className='pl-3 pb-2'>БЕСТИАРИЙ</p>
                        {mapsData[name].entities.map(item => {
                            return <EntityItem {...item} key={item.id} />
                        })}
                    </div>
                    <div className='flex justify-center px-4 bg-color-dark pt-5'>
                        <Button variant='acceess' className='w-full py-3'><p>следующий</p></Button>
                    </div>
                </>}
            {
                !boolean &&
                <div className='flex flex-col'>
                    <ButtonInGroup className='px-3 py-4 pt-6' fn={swap} ><img className='icon-sm rotate-180 translate-x-0.5' src='/icon/double-arrow.svg' /></ButtonInGroup>
                    <ButtonInGroup className='px-3' fn={() => { }} ><img className='icon-sm' src='/icon/dragon.svg' /></ButtonInGroup>
                    <ButtonInGroup className='px-3' fn={() => { }} ><img className='icon-sm' src='/icon/object.svg' /></ButtonInGroup>
                    <ButtonInGroup className='px-3' fn={() => { }} ><img className='icon-sm' src='/icon/human.svg' /></ButtonInGroup>
                    <ButtonInGroup className='px-3' fn={() => { }}><img className='icon-sm' src='/icon/dice-6.svg' /></ButtonInGroup>
                    <ButtonInGroup className='px-3' fn={() => { }} ><img className='icon-sm' src='/icon/queue.svg' /></ButtonInGroup>
                </div>
            }
        </div>
    )
}
