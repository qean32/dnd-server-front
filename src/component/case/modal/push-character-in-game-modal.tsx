import React from 'react'
import { stopPropagation } from '@/lib/function'
import { Modal } from '@component/master/h-order-component'
import { Button, ModalCross, NoFindData } from '@component/ui'
import { f_post } from '@/f'
import { CharacterItemInPush } from '@component/ui/item'

interface Props {
    view: boolean
    swap: React.MouseEventHandler<HTMLDivElement | HTMLButtonElement>
}


export const PushCharacterInGame: React.FC<Props> = ({ view, swap }: Props) => {
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
                <NoFindData title='У игрока нет персонажей!' view={false} className='py-5' />
                <div className='grid gap-5 py-5 grid-cols-8 min-h-[33vh] max-h-[33vh] overflow-scroll'>
                    {f_post.slice(0, 14).map((__, _) =>
                        // @ts-ignore
                        <CharacterItemInPush key={_} id={_ + 1} name='Клиган Клиган' discription='' />
                    )}
                </div>
                <div className="flex justify-end gap-2">
                    <><Button fn={swap} variant='ghost'><p>Отмена</p></Button>
                        <Button variant='acceess' ><p>Добавить</p></Button></>
                </div>
            </div>
        </Modal >
    )
}
