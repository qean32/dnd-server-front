import React from 'react'
import { stopPropagation } from '@/lib/function'
import { Modal } from '@component/master/h-order-component'
import { useAppSelector } from '@/lib/castom-hook/redux'

interface Props {
    view: boolean
    swap: React.MouseEventHandler<HTMLDivElement | HTMLButtonElement>
}


export const ViewImg: React.FC<Props> = ({ view, swap }: Props) => {
    const { path } = useAppSelector(state => state.viewImg)
    const [statePath, setStatePath] = React.useState(path)

    React.useEffect(() => {
        if (!path) {
            setTimeout(() => { setStatePath('') }, 1000)
            return
        }
        setStatePath(path)
    }, [path])

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
                <img src={statePath} alt="" />
            </div>
        </Modal>
    )
}
