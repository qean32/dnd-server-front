import React, { MouseEventHandler } from 'react'
import { ButtonInGroup } from '../../ui'

interface Props {
    swap: MouseEventHandler<HTMLButtonElement>
}


export const ShortVariant: React.FC<Props> = ({ swap }: Props) => {
    return (
        <div className='flex flex-col'>
            <ButtonInGroup className='px-3 py-4 pt-6' fn={swap} ><img className='icon-sm rotate-180 translate-x-0.5' src='/icon/double-arrow.svg' /></ButtonInGroup>
            <ButtonInGroup className='px-3' fn={() => { }} ><img className='icon-sm' src='/icon/dragon.svg' /></ButtonInGroup>
            <ButtonInGroup className='px-3' fn={() => { }} ><img className='icon-sm' src='/icon/object.svg' /></ButtonInGroup>
            <ButtonInGroup className='px-3' fn={() => { }} ><img className='icon-sm' src='/icon/human.svg' /></ButtonInGroup>
            <ButtonInGroup className='px-3' fn={() => { }}><img className='icon-sm' src='/icon/dice-6.svg' /></ButtonInGroup>
            <ButtonInGroup className='px-3' fn={() => { }} ><img className='icon-sm' src='/icon/queue.svg' /></ButtonInGroup>
        </div>
    )
}
