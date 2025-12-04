import React from 'react'
import { ButtonInGroup } from '@component/ui'
import { useQueryParam } from '@/lib/castom-hook'
import { qParamName } from '@/export'
import { getHTMLData } from '@/lib/function'

interface Props {
}


export const SwithContentLiftSideGame: React.FC<Props> = ({ }: Props) => {
    const { pushQ } = useQueryParam(qParamName.sContent)

    const swapGameView = (e: React.MouseEvent<HTMLButtonElement>) => {
        pushQ(getHTMLData(e))
    }

    return (
        <div className='flex justify-between px-1'>
            <ButtonInGroup className='p-4' fn={swapGameView} >
                <img data={'queue'} className='icon-sm pointer-events-none' src='/icon/queue.svg' /></ButtonInGroup>
            <ButtonInGroup className='p-4' fn={swapGameView} >
                <img data={'bestiary'} className='icon-sm pointer-events-none' src='/icon/dragon.svg' /></ButtonInGroup>
            <ButtonInGroup className='p-4' fn={swapGameView} >
                <img data={'objects'} className='icon-sm pointer-events-none' src='/icon/object.svg' /></ButtonInGroup>
            <ButtonInGroup className='p-4' fn={swapGameView} >
                <img data={'characters'} className='icon-sm pointer-events-none' src='/icon/user.svg' /></ButtonInGroup>
            <ButtonInGroup className='p-4' fn={swapGameView}>
                <img className='icon-sm pointer-events-none' src='/icon/dice-6.svg' /></ButtonInGroup>
        </div>
    )
}
