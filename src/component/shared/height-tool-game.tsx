import React from 'react'
import { ButtonInGroup, GroupButton } from '../ui'

interface Props {
}


export const HeightToolGame: React.FC<Props> = ({ }: Props) => {
    return (
        <>
            <div className="fixed top-[55px] right-35">
                <GroupButton>
                    <ButtonInGroup fn={() => { }} path='icon/character.svg' />
                    <ButtonInGroup fn={() => { }} path='icon/grid.svg' />
                    <ButtonInGroup fn={() => { }} path='icon/object.svg' />
                    <ButtonInGroup fn={() => { }} path='icon/dragon.svg' />
                    <ButtonInGroup fn={() => { }} path='icon/map.svg' />
                    <ButtonInGroup fn={() => { }} path='icon/tool.svg' />
                </GroupButton>
            </div>
            <div className="fixed top-[55px] right-96">
                <GroupButton>
                    <ButtonInGroup fn={() => { }} path='icon/game.svg' />
                    <ButtonInGroup fn={() => { }} path='icon/map.svg' />
                </GroupButton>
            </div>
        </>
    )
}
