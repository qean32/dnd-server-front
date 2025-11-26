import React from 'react'
import { Ava } from '@component/ui'
import { entityDto } from '@/model'
import { EntityItemMenu } from '@component/case/context-menu'


export const InToolCharacterItem: React.FC<entityDto> = ({ name, path }: entityDto) => {
    return (
        <div
            className='flex items-center justify-between px-3 pr-3 py-4 bg-color-hover transition-300'
        >
            <div className="flex gap-2 flex-1 justify-between">
                <div className="flex gap-2">
                    <Ava path={path} size='ava-md' />
                    <p className='pl-3 flex-1 text-ellipsis overflow-hidden text-nowrap'>{name}</p>
                </div>
                <EntityItemMenu />
            </div>
        </div>
    )
}
