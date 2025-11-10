import React from 'react'
import { stopPropagation } from '../../../lib/function'
import { Modal } from '../../general/hoc'
import { Button, CharacterLinkItem, ModalCross } from '../../ui'
import { fakePost } from '../../../fake-data'

interface Props {
    view: boolean
    swap: React.MouseEventHandler<HTMLDivElement | HTMLButtonElement>
}


export const AddCharacterInGame: React.FC<Props> = ({ view, swap }: Props) => {
    return (
        <Modal
            swap={swap}
            view={view}
            animation={{
                open: 'modal-open',
                close: 'modal-close'
            }}
        >
            <div className="relative bg-color p-5 w-3/7 px-7 rounded-md overflow-scroll flex flex-col -translate-y-1/12" onClick={stopPropagation}>
                <ModalCross fn={swap} />
                <p className='pl-5 py-4 text-2xl'>Персонажи игрока</p>
                <div className='grid gap-5 p-5 grid-cols-7 min-h-[340px] max-h-[340px] overflow-scroll'>
                    {fakePost.slice(0, 14).map((__, _) =>
                        <CharacterLinkItem link='https://aternia.games/i/dnd/character_sheet/show/10399ffb-e071-4c6d-b7f2-3f4fcee3fab0' key={_} number={_ + 1} name='Клиган Клиган' />
                    )}
                </div>
                <div className="flex justify-end gap-2">
                    <><Button fn={swap} variant='ghost'><p>Отмена</p></Button>
                        <Button variant='acceess'><p>Добавить</p></Button></>
                </div>
            </div>
        </Modal >
    )
}
