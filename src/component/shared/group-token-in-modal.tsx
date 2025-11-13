import React from 'react'
import { Title } from '../ui'
import { entityDto, propsComponent } from '../../model'

interface Props {
    title: string
    component: propsComponent
    array?: entityDto[]
}


export const GroupTokenInModal: React.FC<Props> = ({ title, component: Component }: Props) => {
    return (
        <div className="ml-5 rounded-sm pb-2 pt-2">
            <Title className='pb-2'>{title}</Title>
            <div className="grid grid-cols-5 adaptive2k-grid-column-5">
                <Component />
                <Component />
                <Component />
                <Component />
                <Component />
                <Component />
                <Component />
                <Component />
                <Component />
            </div>
        </div>
    )
}
