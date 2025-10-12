import React from 'react'
import { cn } from '../../lib/function'
import { ButtonInGroup } from './btn-in-group'

interface Props {
    className?: string
}


export const Direction: React.FC<Props> = ({ className }: Props) => {
    return (
        <div className={cn('flex justify-between w-1/2', className)}>

            <ButtonInGroup className="w-full" fn={() => { }}><p>D&D</p></ButtonInGroup>
            <ButtonInGroup className="w-full" fn={() => { }}><p>ВЕБ</p></ButtonInGroup>
            <ButtonInGroup className="w-full" fn={() => { }}><p>ПРОЧЕЕ</p></ButtonInGroup>
        </div>
    )
}
