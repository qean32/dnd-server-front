import React from 'react'
import { ButtonInGroup } from '@component/ui'
import { useQueryParam } from '@/lib/castom-hook'
import { qParamName } from '@/export'
import { getHTMLData } from '@/lib/function'

interface Props {
}


export const SwithContentLiftSideGame: React.FC<Props> = ({ }: Props) => {
    const { pushQ } = useQueryParam(qParamName.sContent, 'queue')

    const swapGameView = (e: React.MouseEvent<HTMLButtonElement>) => {
        pushQ(getHTMLData(e, false, 'value'))
    }

    return (
        <div className='flex justify-between'>
            <ButtonInGroup value='queue' className='p-4' fn={swapGameView}>
                <img className='icon-sm pointer-events-none' src='/icon/queue.svg' /></ButtonInGroup>
            <ButtonInGroup value='bestiary' className='p-4' fn={swapGameView}>
                <img className='icon-sm pointer-events-none' src='/icon/dragon.svg' /></ButtonInGroup>
            <ButtonInGroup value='objects' className='p-4' fn={swapGameView}>
                <img className='icon-sm pointer-events-none' src='/icon/object.svg' /></ButtonInGroup>
            <ButtonInGroup value='characters' className='p-4' fn={swapGameView}>
                <img className='icon-sm pointer-events-none' src='/icon/user.svg' /></ButtonInGroup>
            <ButtonInGroup className='p-4'>
                <img className='icon-sm pointer-events-none' src='/icon/dice-6.svg' /></ButtonInGroup>
        </div>
    )
}
