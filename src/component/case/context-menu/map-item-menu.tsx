import React from 'react'
import { ContextMenu } from '../../master/h-order-component'

interface Props {
}


export const MapItemMenu: React.FC<Props> = ({ }: Props) => {
    return (
        <ContextMenu>
            <div className="absolute -bottom-1 right-3 translate-y-full z-20 bg-color p-3 px-0 rounded-sm cursor-pointer">
                <div className="flex flex-col items-end">
                    <div className='flex flex-col children-font-sm text-end gap-2'>
                        <p className='text-nowrap py-2 bg-color-dark-hover px-3'>Удалить</p>
                    </div>
                </div>
            </div>
        </ContextMenu>
    )
}
