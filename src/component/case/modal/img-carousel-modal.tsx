import React from 'react'
import { stopPropagation } from '../../../lib/function'
import { Modal } from '../../general/hoc'
import { PlusButton, ScrollArrow } from '../../ui'
import { ViewImgItem } from '../../ui/view-img-item'
import * as ModalGroup from './index-group'

interface Props {
    view: boolean
    swap: React.MouseEventHandler<HTMLDivElement>
}


export const ImgCarousel: React.FC<Props> = ({ view, swap }: Props) => {
    const [value, setValue] = React.useState('/img/dnd1.jpg')
    const ref = React.useRef<null | HTMLDivElement>(null)

    const clickHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        // @ts-ignore
        setValue(e.target.getAttribute('value'))
    }

    const scroll = (value: number) => {
        if (ref.current)
            ref.current.scrollTo({
                top: 0,
                left: ref.current.scrollLeft + value,
            })
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
            <div className="relative bg-color w-11/12 h-[140px] p-5 pb-0 rounded-md translate-y-[250%] flex gap-5" onClick={(e) => { stopPropagation(e); clickHandler(e) }}>
                <div className="flex justify-between fixed h-full w-full -translate-x-5 top-0 z-10 pointer-events-none child-fill-event">
                    <ScrollArrow fn={scroll} plus />
                    <ScrollArrow fn={scroll} plus={false} />
                </div>
                <div ref={ref} className="flex w-full gap-5 overflow-x-scroll px-[40px]">
                    <ViewImgItem path='/img/dnd+.jpg' value={value} />
                    <ViewImgItem path='/img/dnd1.jpg' value={value} />
                    <ViewImgItem path='/img/dnd2.jpg' value={value} />
                    <ViewImgItem path='/img/dnd3.jpg' value={value} />
                    <ViewImgItem path='/img/dnd4.jpg' value={value} />
                    <ViewImgItem path='/img/dnd3.jpg' value={value} />
                    <ViewImgItem path='/img/dnd4.jpg' value={value} />
                    <ViewImgItem path='/img/dnd4.jpg' value={value} />
                    <ViewImgItem path='/img/dnd3.jpg' value={value} />
                    <ViewImgItem path='/img/dnd4.jpg' value={value} />
                    <ViewImgItem path='/img/dnd4.jpg' value={value} />
                    <ViewImgItem path='/img/dnd4.jpg' value={value} />
                    <ViewImgItem path='/img/dnd4.jpg' value={value} />
                    <ViewImgItem path='/img/dnd4.jpg' value={value} />
                    <ViewImgItem path='/img/dnd4.jpg' value={value} />
                    <ViewImgItem path='/img/dnd4.jpg' value={value} />
                    <ModalGroup.Set Modal={ModalGroup.AddImg}>
                        <PlusButton className='min-w-[120px] h-full' />
                    </ModalGroup.Set>
                </div>
            </div>
        </Modal>
    )
}
