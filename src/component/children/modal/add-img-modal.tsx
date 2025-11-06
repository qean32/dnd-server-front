import React from 'react'
import { generateId, stopPropagation } from '../../../lib/function'
import { Modal } from '../../general/hoc'
import { Button, ModalCross } from '../../ui'
import { useBoolean } from '../../../lib/castom-hook'

interface Props {
    view: boolean
    swap: React.MouseEventHandler<HTMLDivElement | HTMLButtonElement>
}


export const AddImg: React.FC<Props> = ({ view, swap }: Props) => {
    const [src, setSrc] = React.useState<any>([]);
    const { boolean, off, on } = useBoolean(false)
    const id = generateId().toString()
    const urls = src.map((file: any) => URL.createObjectURL(file));

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return
        if (!e.target.files[0]) return

        setSrc([e.target.files[0]])
    }

    const dragLeaveHandler = (e: React.DragEvent<HTMLLabelElement>) => {
        e.preventDefault()

        off()
    }
    const dragStartHandler = (e: React.DragEvent<HTMLLabelElement>) => {
        e.preventDefault()

        on()
    }
    const dropHandler = (e: React.DragEvent<HTMLLabelElement>) => {
        e.preventDefault()

        e.dataTransfer.files && setSrc([e.dataTransfer.files[0]])
    }

    return (
        <Modal
            swap={swap}
            view={view}
            animation={{
                open: 'modal-open',
                close: 'modal-close'
            }}
        >
            <div className="bg-color w-5/12 h-8/12 rounded-md flex flex-col overflow-hidden relative" onClick={stopPropagation}>
                <ModalCross fn={swap} />
                <input accept='image/png, image/jpeg, image/svg, image/jpg, image/webp' type='file' hidden id={id} onChange={changeHandler} />
                <label
                    className="flex p-5 cursor-pointer justify-center items-center w-full h-10/12 bg-img"
                    htmlFor={id}
                    onDragLeave={e => dragLeaveHandler(e)}
                    onDragStart={e => dragStartHandler(e)}
                    onDragOver={e => dragStartHandler(e)}
                    onDrop={e => dropHandler(e)}
                >
                    {urls[0] && <img src={urls[0]} alt="" className='h-full rounded-md' />}
                    {!urls[0] && (boolean ? <img src={urls[0]} alt="" width={50} /> : <img src={'/icon/community.svg'} alt="" width={50} />)}
                </label>
                <div className="flex gap-5 justify-end p-5 pt-8">
                    <Button variant='ghost'><p>Отмена</p></Button>
                    <Button variant='acceess'><p>Добавить</p></Button>
                </div>
            </div>
        </Modal>
    )
}
