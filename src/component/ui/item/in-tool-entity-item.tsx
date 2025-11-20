import React from 'react'
import { Ava } from '@component/ui'
import { entityDto } from '@/model'
import { EntityItemMenu } from '@component/case/context-menu'


export const InToolEntityItem: React.FC<entityDto> = ({ name, path }: entityDto) => {
    return (
        <div
            draggable
            className='flex items-center justify-between px-3 pr-3 py-4 bg-color-hover transition-03'
            style={{ cursor: 'move' }}
        >
            <div className="flex gap-2 flex-1 justify-between">
                <div className="flex gap-2">
                    <Ava path={path} size='ava-md' />
                    <p className='pl-3 flex-1 text-ellipsis overflow-hidden text-nowrap'>{name}</p>
                </div>
                <EntityItemMenu />
            </div>
        </div >
    )
}
