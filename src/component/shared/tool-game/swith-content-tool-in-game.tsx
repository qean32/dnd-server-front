import React from 'react'
import { ButtonInGroup } from '../../ui'
import { useAppDispatch } from '../../../store'
import { swapGameToolContent } from '../../../store/view-content-store'

interface Props {
}


export const SwithContentLiftSideGame: React.FC<Props> = ({ }: Props) => {
    const dispath = useAppDispatch()

    const swapGameView = (e: React.MouseEvent<HTMLButtonElement>) => {
        // @ts-ignore
        dispath(swapGameToolContent(e.target.children[0].getAttribute('data')))
    }

    return (
        <div className='flex justify-between'>
            <ButtonInGroup className='px-4' fn={swapGameView} >
                <img data={'bestiary'} className='icon-sm pointer-events-none' src='/icon/dragon.svg' /></ButtonInGroup>
            <ButtonInGroup className='px-4' fn={swapGameView} >
                <img data={'objects'} className='icon-sm pointer-events-none' src='/icon/object.svg' /></ButtonInGroup>
            <ButtonInGroup className='px-4' fn={swapGameView} >
                <img data={'characters'} className='icon-sm pointer-events-none' src='/icon/user.svg' /></ButtonInGroup>
            <ButtonInGroup className='px-4' fn={swapGameView}>
                <img className='icon-sm pointer-events-none' src='/icon/dice-6.svg' /></ButtonInGroup>
            <ButtonInGroup className='px-4' fn={swapGameView} >
                <img data={'queue'} className='icon-sm pointer-events-none' src='/icon/queue.svg' /></ButtonInGroup>
        </div>
    )
}
