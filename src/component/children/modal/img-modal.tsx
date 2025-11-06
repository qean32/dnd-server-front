import React from 'react'
import { stopPropagation } from '../../../lib/function'
import { Modal } from '../../general/hoc'
import { PlusButton } from '../../ui'
import { ViewImgItem } from '../../ui/view-img-item'
import { Set } from '../modal/modal-set'
import { Notes } from './notes-modal'

interface Props {
    view: boolean
    swap: React.MouseEventHandler<HTMLDivElement>
}


export const Img: React.FC<Props> = ({ view, swap }: Props) => {
    const [value, setValue] = React.useState('/img/dnd1.jpg')

    const clickHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        // @ts-ignore
        setValue(e.target.getAttribute('value'))
    }

    return (
        <Modal
            swap={swap}
            view={view}
            animation={{
                open: 'modal-open-bottom',
                close: 'modal-close-bottom'
            }}
        >
            <div className="relative bg-color w-11/12 h-[140px] p-5 pb-0 rounded-md overflow-scroll translate-y-[250%] flex gap-5" onClick={(e) => { stopPropagation(e); clickHandler(e) }}>
                <ViewImgItem path='/img/dnd+.jpg' value={value} />
                <ViewImgItem path='/img/dnd1.jpg' value={value} />
                <ViewImgItem path='/img/dnd2.jpg' value={value} />
                <ViewImgItem path='/img/dnd3.jpg' value={value} />
                <ViewImgItem path='/img/dnd4.jpg' value={value} />
                <Set Modal={Notes}>
                    <PlusButton className='w-[120px] h-full' />
                </Set>
            </div>
        </Modal>
    )
}
