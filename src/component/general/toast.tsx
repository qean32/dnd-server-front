import React from 'react'
import { useAppSelector } from '../../lib/castom-hook/redux'
import { toastHook } from '../../lib/function'

interface Props {
    className?: string
}

export const Toast: React.FC<Props> = ({ }: Props) => {
    const { toasts } = useAppSelector(state => state.toast)
    return (
        <div className='fixed z-50' style={{ inset: '20px' }}>
            {!!toasts.length && toasts.map(item => {
                return toastHook(item.key, item.id, item.payload)
            })}
        </div>
    )
}
