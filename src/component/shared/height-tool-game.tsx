import React from 'react'
import { ButtonInGroup, GroupButton } from '../ui'
import { Modal } from '../children/modal'
import { useAppDispatch, useAppSelector } from '../../lib/castom-hook/redux'
import { toast } from '../../lib/function'
import { useLocation } from 'react-router-dom'
import { gameStorage, host } from '../../export'

interface Props {
}


export const HeightToolGame: React.FC<Props> = ({ }: Props) => {
    const dispath = useAppDispatch()
    const { pathname } = useLocation()
    const state = useAppSelector(state => state.game)
    const saveGame = () => { localStorage.setItem(gameStorage, JSON.stringify(state.game)); toast(dispath, "message", { text: 'Сохранено' }); console.log(state.game) }
    const forwardClick = React.useCallback(() => { navigator.clipboard.writeText(`Играйте вместе с друзьями! \n${host}${pathname}`); toast(dispath, "message", { text: 'Ссылка скопирована' }) }, [])

    return (
        <div className='absolute flex z-10 right-35 gap-4'>
            <div>
                <GroupButton>
                    <ButtonInGroup children={<img className='icon-sm' src='/icon/game.svg' />} />
                    <Modal.Set Modal={Modal.Map}>
                        <ButtonInGroup children={<img className='icon-sm' src='/icon/map.svg' />} /></Modal.Set>
                </GroupButton>
            </div>
            <div>
                <GroupButton>
                    <Modal.Set Modal={Modal.Users}>
                        <ButtonInGroup children={<img className='icon-sm' src='/icon/user.svg' />} /></Modal.Set>
                    <ButtonInGroup children={<img className='icon-sm' src='/icon/grid.svg' />} />
                    <ButtonInGroup fn={forwardClick} children={<img className='icon-sm' src='/icon/forward.svg' />} />
                    <ButtonInGroup fn={saveGame} children={<img className='icon-sm' src='/icon/save.svg' />} />
                    <Modal.Set Modal={Modal.AddEntity}>
                        <ButtonInGroup children={<img className='icon-sm' src='/icon/dragon.svg' />} /></Modal.Set>
                    <Modal.Set
                        Modal={Modal.AddObject}>
                        <ButtonInGroup children={<img className='icon-sm' src='/icon/object.svg' />} /></Modal.Set>
                    <Modal.Set Modal={Modal.Notes}>
                        <ButtonInGroup children={<img className='icon-sm' src='/icon/edit.svg' />} /></Modal.Set>
                    {/* <ButtonInGroup children={<img className='icon-sm' src='/icon/map.svg' />} /> */}
                </GroupButton>
            </div>
        </div>
    )
}
