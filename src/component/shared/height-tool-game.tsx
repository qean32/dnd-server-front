import React from 'react'
import { ButtonInGroup, GroupButton } from '../ui'

interface Props {
}


export const HeightToolGame: React.FC<Props> = ({ }: Props) => {
    return (
        <div className='fixed flex z-10 top-[50px] right-35 gap-3'>
            <div>
                <GroupButton>
                    <ButtonInGroup fn={() => { }} children={<img className='icon-sm' src='/icon/game.svg' />} />
                    <ButtonInGroup fn={() => { }} children={<img className='icon-sm' src='/icon/map.svg' />} />
                </GroupButton>
            </div>
            <div>
                <GroupButton>
                    <ButtonInGroup fn={() => { }} children={<img className='icon-sm' src='/icon/human.svg' />} />
                    <ButtonInGroup fn={() => { }} children={<img className='icon-sm' src='/icon/grid.svg' />} />
                    <ButtonInGroup fn={() => { }} children={<img className='icon-sm' src='/icon/object.svg' />} />
                    <ButtonInGroup fn={() => { }} children={<img className='icon-sm' src='/icon/dragon.svg' />} />
                    <ButtonInGroup fn={() => { }} children={<img className='icon-sm' src='/icon/map.svg' />} />
                    <ButtonInGroup fn={() => { }} children={<img className='icon-sm' src='/icon/tool.svg' />} />
                </GroupButton>
            </div>
        </div>
    )
}
