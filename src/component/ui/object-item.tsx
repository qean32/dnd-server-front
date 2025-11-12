import React from 'react'
import { entityDto } from '../../model'
import { ContextMenu } from '../shared'


export const ObjectItem: React.FC<entityDto> = ({ path }: entityDto) => {
    return (
        <div className='flex items-start justify-between px-3 pr-3 py-4 bg-color-hover transition-03' style={{ cursor: 'move' }}>
            <div className="flex w-fit gap-2 max-w-10/12">
                <img src={path} alt="" className='max-w-1/2' />
            </div>
            <ContextMenu>
                <div className="absolute -bottom-1 right-3 translate-y-full z-20 bg-color p-3 px-0 rounded-sm cursor-pointer">
                    <div className="flex flex-col items-end">
                        <div className='flex flex-col children-font-sm text-end gap-2'>
                            <p className='text-nowrap py-2 bg-color-dark-hover px-3'>Удалить</p>
                        </div>
                    </div>
                </div>
            </ContextMenu>
        </div>
    )
}
