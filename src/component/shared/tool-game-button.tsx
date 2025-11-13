import React from 'react'
import { ButtonInGroup, GroupButton } from '@component/ui'
import { Modal } from '@component/case/modal'
import { useAppDispatch, useAppSelector } from '@lib/castom-hook/redux'
import { toast } from '@lib/function'
import { useLocation } from 'react-router-dom'
import { gameStorage, host } from '@/export'
import { AddObject, AddEntity, AddMap } from '@component/case/accept-add/index.ts'
import { InStoreEntityItem, InStoreMapItem, InStoreObjectItem } from '@component/ui/item/'

interface Props {
}


export const ToolGameButton: React.FC<Props> = ({ }: Props) => {
    const dispath = useAppDispatch()
    const { pathname } = useLocation()
    const { session } = useAppSelector(state => state.session)
    const saveGame = () => {
        localStorage.setItem(gameStorage, JSON.stringify(session));
        toast(dispath, "message", { text: 'Сохранено' }); console.log(session)
    }
    const forwardClick = React.useCallback(() => {
        navigator.clipboard.writeText(`Играйте вместе с друзьями! \n${host}${pathname}`);
        toast(dispath, "message", { text: 'Ссылка скопирована' })
    }, [])

    return (
        <div className='absolute flex z-10 right-35 gap-4'>
            <div>
                <GroupButton>
                    <ButtonInGroup children={<img className='icon-sm' src='/icon/game.svg' />} />
                    <Modal.Set modal={Modal.MapsGame}>
                        <ButtonInGroup children={<img className='icon-sm' src='/icon/map.svg' />} /></Modal.Set>
                </GroupButton>
            </div>
            <div>
                <GroupButton>
                    <Modal.Set modal={Modal.Users}>
                        <ButtonInGroup children={<img className='icon-sm' src='/icon/user.svg' />} /></Modal.Set>
                    <ButtonInGroup children={<img className='icon-sm' src='/icon/grid.svg' />} />
                    <ButtonInGroup fn={forwardClick} children={<img className='icon-sm' src='/icon/forward.svg' />} />
                    <ButtonInGroup fn={saveGame} children={<img className='icon-sm' src='/icon/save.svg' />} />
                    {/* @ts-ignore */}
                    <Modal.Set modal={Modal.AddSomething} component={InStoreEntityItem} accept={AddEntity}>
                        <ButtonInGroup children={<img className='icon-sm' src='/icon/dragon.svg' />} /></Modal.Set>
                    {/* @ts-ignore */}
                    <Modal.Set modal={Modal.AddSomething} component={InStoreObjectItem} accept={AddObject}>
                        <ButtonInGroup children={<img className='icon-sm' src='/icon/object.svg' />} /></Modal.Set>
                    {/* @ts-ignore */}
                    <Modal.Set modal={Modal.AddSomething} component={InStoreMapItem} accept={AddMap}>
                        <ButtonInGroup children={<img className='icon-sm' src='/icon/map+.svg' />} /></Modal.Set>
                    <Modal.Set modal={Modal.Notes}>
                        <ButtonInGroup children={<img className='icon-sm' src='/icon/edit.svg' />} /></Modal.Set>
                    <Modal.Set modal={Modal.ImgCarousel}>
                        <ButtonInGroup children={<img className='icon-sm' src='/icon/img.svg' />} /></Modal.Set>
                </GroupButton>
            </div>
        </div>
    )
}
