import React from 'react'
import { cn } from '../../lib/function'
import { Button, ButtonInGroup, Character } from '../ui'
import { useBoolean } from '../../lib/castom-hook'

interface Props {
    className?: string
}


export const LeftSideGame: React.FC<Props> = ({ className }: Props) => {
    const { boolean, swap } = useBoolean(false)

    return (
        <div className={cn('fixed z-10 w-[15%] h-[100%] bg-color-dark transition07', (!boolean && 'w-[70px]'), className)}>
            <ButtonInGroup className='absolute right-0 translate-x-11/12 bg-color-dark rounded-sm bg-color-dark-hover' fn={swap}>
                <img
                    src='/icon/double-arrow.svg'
                    className={cn('bg-color-dark rounded-r-sm transition07 icon-sm', (boolean && 'rotate-180'))}
                />
            </ButtonInGroup>
            {boolean &&
                <>
                    <div className='flex justify-between'>
                        <ButtonInGroup className='px-4' fn={() => { }}><img className='icon-sm' src='/icon/dragon.svg' /></ButtonInGroup>
                        <ButtonInGroup className='px-4' fn={() => { }}><img className='icon-sm' src='/icon/object.svg' /></ButtonInGroup>
                        <ButtonInGroup className='px-4' fn={() => { }}><img className='icon-sm' src='/icon/human.svg' /></ButtonInGroup>
                        <ButtonInGroup className='px-4' fn={() => { }}><img className='icon-sm' src='/icon/queue.svg' /></ButtonInGroup>
                    </div>
                    <div className='h-[80%]'>
                        <p className='pl-2'>БЕСТИАРИЙ</p>
                        <Character />
                        <Character />
                        <Character />
                        <Character />
                        <Character />
                    </div>
                    <div className='flex justify-center items-center pt-2'>
                        <Button children={<p>следующий</p>} className='w-[90%]' />
                    </div>
                </>}
            {
                !boolean &&
                <>
                    <ButtonInGroup className='px-4' fn={() => { }} ><img className='icon-sm' src='/icon/dragon.svg' /></ButtonInGroup>
                    <ButtonInGroup className='px-4' fn={() => { }} ><img className='icon-sm' src='/icon/object.svg' /></ButtonInGroup>
                    <ButtonInGroup className='px-4' fn={() => { }} ><img className='icon-sm' src='/icon/human.svg' /></ButtonInGroup>
                    <ButtonInGroup className='px-4' fn={() => { }} ><img className='icon-sm' src='/icon/queue.svg' /></ButtonInGroup>
                </>
            }
        </div>
    )
}
