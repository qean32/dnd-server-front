import React from 'react'
import { entityDto } from '../../../model'
import { ObjectItemMenu } from '../../case/context-menu'


export const InToolObjectItem: React.FC<entityDto> = ({ path = '/img/dnd.jpg' }: entityDto) => {
    return (
        <div className='flex items-start justify-between px-3 pr-3 py-4 bg-color-hover transition-03' style={{ cursor: 'move' }}>
            <div className="flex w-fit gap-2 max-w-10/12">
                <img src={path} alt="" className='max-w-1/2' />
            </div>
            <ObjectItemMenu />
        </div>
    )
}
