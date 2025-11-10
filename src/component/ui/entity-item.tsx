import React from 'react'
import { Ava } from './ava'
import { entityDto } from '../../model'
import { ContextMenu } from '../shared'


export const EntityItem: React.FC<entityDto> = ({ name, path }: entityDto) => {
    return (
        <div className='flex items-center justify-between px-3 pr-3 py-4 bg-color-hover transition-03' style={{ cursor: 'move' }}>
            <div className="flex w-fit gap-2 max-w-10/12">
                <Ava path={path} size='ava-md' />
                <p className='pl-3 flex-1 text-ellipsis overflow-hidden text-nowrap'>{name}</p>
            </div>
            <ContextMenu>
                <div className="absolute -bottom-1 right-3 translate-y-full z-20 bg-color p-3 px-0 rounded-sm cursor-pointer">
                    <div className="flex flex-col items-end">
                        <div className='flex flex-col children-font-sm text-end gap-2'>
                            <p className='bg-yellow-800 mx-3'>30</p>
                            <p className='text-nowrap py-2 bg-color-dark-hover px-3'>Добавить статус</p>
                        </div>
                    </div>
                </div>
            </ContextMenu>
        </div>
    )
}
