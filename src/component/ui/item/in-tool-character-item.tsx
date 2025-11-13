import React from 'react'
import { Ava } from '../ava'
import { entityDto } from '../../../model'
import { EntityItemMenu } from '../../case/context-menu'


export const InToolCharacterItem: React.FC<entityDto> = ({ name, path }: entityDto) => {
    return (
        <div className='flex items-center justify-between px-3 pr-3 py-4 bg-color-hover transition-03' style={{ cursor: 'move' }}>
            <div className="flex w-fit gap-2 max-w-10/12">
                <Ava path={path} size='ava-md' />
                <p className='pl-3 flex-1 text-ellipsis overflow-hidden text-nowrap'>{name}</p>
                <EntityItemMenu />
            </div>
        </div>
    )
}
