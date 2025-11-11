import React from 'react'
import { stopPropagation } from '../../../lib/function'
import { Modal } from '../../general/hoc'
import { AddEntityFilter, AddImgArea, Button, ModalCross, TextInput } from '../../ui'
import { GroupToken } from '../../shared'

interface Props {
    view: boolean
    swap: React.MouseEventHandler<HTMLDivElement | HTMLButtonElement>
}


export const AddMapInGame: React.FC<Props> = ({ view, swap }: Props) => {
    return (
        <Modal
            swap={swap}
            view={view}
            animation={{
                open: 'modal-open',
                close: 'modal-close'
            }}
        >
            <div className="relative bg-color w-8/12 h-9/12 rounded-md flex overflow-hidden" onClick={stopPropagation}>
                <ModalCross fn={swap} />
                <div className="pt-2 w-9/12 h-full overflow-scroll relative">
                    <AddEntityFilter />
                    <GroupToken title='Базовый набор' />
                    <GroupToken title='Набор Хелойвин' />
                </div>
                <div className="w-3/12 h-full flex flex-col">
                    <AddImgArea className='h-1/3 w-full mt-10' />
                    <TextInput className='mx-5' placeHolder='Название' />
                    <div className="flex-1 flex justify-end flex-col pb-5 items-end px-5">
                        <div className="flex gap-2">
                            <Button fn={swap} variant='ghost'><p>Отмена</p></Button>
                            <Button variant='acceess'><p>Добавить</p></Button>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    )
}
