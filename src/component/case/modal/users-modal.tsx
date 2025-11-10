import React from 'react'
import { stopPropagation } from '../../../lib/function'
import { Modal } from '../../general/hoc'
import { Ava, ModalCross } from '../../ui'
import { useAppDispatch } from '../../../lib/castom-hook/redux'
import { swapAddCharacterInGamePath } from '../../../store/add-character-in-game-path'

interface Props {
    view: boolean
    swap: React.MouseEventHandler<HTMLDivElement>
}


export const Users: React.FC<Props> = ({ view, swap }: Props) => {
    const dispath = useAppDispatch()

    const clickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        // @ts-ignore
        dispath(swapAddCharacterInGamePath({ href: JSON.parse(e.target.getAttribute('data')).id }))
    }
    return (
        <Modal
            swap={swap}
            view={view}
            className='justify-end h-full'
            animation={{
                open: 'right-modal-open',
                close: 'right-modal-close'
            }}
        >
            <div className='relative bg-color h-full w-[320px]' onClick={stopPropagation} >
                <ModalCross fn={swap} />
                <div className="pt-10" onClick={clickHandler}>
                    <p className='pl-5 pb-5'>Добавить персонажа игрока</p>
                    {[1, 2, 2, 2, 2].map(() => {
                        return (
                            <div
                                className="flex px-4 py-2 gap-5 bg-color-dark-hover transition-03 bg-color cursor-pointer child-no-event"
                                // @ts-ignore
                                data={JSON.stringify({ id: 1 })}>
                                <Ava path='' className='bg-color-darkness' size='ava-md' />
                                <p>Zxccursed</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </Modal >
    )
}
