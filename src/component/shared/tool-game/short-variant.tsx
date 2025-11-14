import React from 'react'
import { ButtonInGroup } from '@component/ui'
import { useAppDispatch } from '@/store'
import { swapSessionToolContent } from '@/store/view-content-store'

interface Props {
    swap: React.MouseEventHandler<HTMLButtonElement>
}


export const ShortVariant: React.FC<Props> = ({ swap }: Props) => {
    const dispath = useAppDispatch()

    const swapGameView = (e: React.MouseEvent<HTMLButtonElement>) => {
        // @ts-ignore
        dispath(swapSessionToolContent(e.target.children[0].getAttribute('data')))
        swap(e)
    }

    return (
        <div className='flex flex-col'>
            <ButtonInGroup className='px-3 py-4' fn={swap} ><img className='icon-sm rotate-180 translate-x-0.5' src='/icon/double-arrow.svg' /></ButtonInGroup>
            <ButtonInGroup className='px-3' fn={swapGameView} >
                <img data={'bestiary'}
                    className='icon-sm pointer-events-none' src='/icon/dragon.svg' />
            </ButtonInGroup>
            <ButtonInGroup className='px-3' fn={swapGameView} >
                <img data={'objects'}
                    className='icon-sm pointer-events-none' src='/icon/object.svg' />
            </ButtonInGroup>
            <ButtonInGroup className='px-3' fn={swapGameView} >
                <img data={'characters'}
                    className='icon-sm pointer-events-none' src='/icon/user.svg' />
            </ButtonInGroup>
            <ButtonInGroup className='px-3' fn={swapGameView}>
                <img className='icon-sm pointer-events-none' src='/icon/dice-6.svg' />
            </ButtonInGroup>
            <ButtonInGroup className='px-3' fn={swapGameView} >
                <img data={'queue'}
                    className='icon-sm pointer-events-none' src='/icon/queue.svg' />
            </ButtonInGroup>
        </div>
    )
}
