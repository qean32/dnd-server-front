import React from 'react'
import { stopPropagation } from '@/lib/function'
import { Modal } from '@component/master/h-order-component'
import { useAppSelector } from '@/lib/castom-hook/redux'

interface Props {
    view: boolean
    swap: React.MouseEventHandler<HTMLDivElement | HTMLButtonElement>
}


export const ViewImg: React.FC<Props> = ({ view, swap }: Props) => {
    const { href } = useAppSelector(state => state.viewImg)
    const [stateHref, setStateHref] = React.useState(href)

    React.useEffect(() => {
        if (!href) {
            setTimeout(() => { setStateHref('') }, 1000)
            return
        }
        setStateHref(href)
    }, [href])

    return (
        <Modal
            swap={swap}
            view={view}
            animation={{
                open: 'modal-open',
                close: 'modal-close'
            }}
        >
            <div className="bg-color max-h-11/12 rounded-md flex flex-col overflow-hidden relative" onClick={stopPropagation}>
                <img src={stateHref} alt="" />
            </div>
        </Modal>
    )
}
