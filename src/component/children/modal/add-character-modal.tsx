import React from 'react'
import { stopPropagation } from '../../../lib/function'
import { Modal } from '../../general/hoc'
import { AddCharaterForm } from '../form'
import { Button } from '../../ui'

interface Props {
    view: boolean
    swap: React.MouseEventHandler<HTMLDivElement>
}


export const AddCharacter: React.FC<Props> = ({ view, swap }: Props) => {
    return (
        <Modal
            swap={swap}
            view={view}
            animation={{
                open: 'modal-open',
                close: 'modal-close'
            }}
        >
            <div className="bg-color p-5 w-2/7 px-7 rounded-md overflow-scroll flex flex-col -translate-y-1/4" onClick={stopPropagation}>
                <AddCharaterForm>
                    <><Button variant='ghost'><p>Отмена</p></Button>
                        <Button variant='acceess'><p>Добавить</p></Button></>
                </AddCharaterForm>
            </div>
        </Modal>
    )
}
