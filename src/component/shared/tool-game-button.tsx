import React from 'react'
import { ButtonInGroup, GroupButton } from '@component/ui'
import { Modal } from '@component/case/modal'
import { useAppDispatch, useAppSelector } from '@lib/castom-hook/redux'
import { toast } from '@lib/function'
import { slogan } from '@/export'
import { PushObject, PushEntity } from '@/component/case/push-to-session'
import { InStoreEntityItem, InStoreObjectItem } from '@component/ui/item/'
import { entityDto, objectDto } from '@/model'

interface Props {
}


export const ToolGameButton: React.FC<Props> = ({ }: Props) => {
    const dispath = useAppDispatch()
    const { session } = useAppSelector(state => state.session)
    const saveGame = () => {
        localStorage.setItem("game-storage", JSON.stringify(session));
        toast(dispath, "message", { text: 'Сохранено' }); console.log(session)
    }
    const forwardClick = React.useCallback(() => {
        navigator.clipboard.writeText(`${slogan} \n${process.env.CLIENT_HOST}${window.location.pathname.slice(1)}`);
        toast(dispath, "message", { text: 'Ссылка скопирована' })
    }, [])

    return (
        <div className='absolute flex z-10 right-35 gap-4'>
            <div>
                <GroupButton>
                    <ButtonInGroup children={<img className='icon-sm' src='/icon/game.svg' />} />
                    <Modal.Root modal={Modal.MapsGame}>
                        <ButtonInGroup children={<img className='icon-sm' src='/icon/map.svg' />} /></Modal.Root>
                </GroupButton>
            </div>
            <div>
                <GroupButton>
                    <Modal.Root modal={Modal.Users}>
                        <ButtonInGroup children={<img className='icon-sm' src='/icon/user.svg' />} /></Modal.Root>
                    <ButtonInGroup children={<img className='icon-sm' src='/icon/grid.svg' />} />
                    <ButtonInGroup fn={forwardClick} children={<img className='icon-sm' src='/icon/forward.svg' />} />
                    <ButtonInGroup fn={saveGame} children={<img className='icon-sm' src='/icon/save.svg' />} />
                    <Modal.Root modal={Modal.PushToSession} props={{ renderItem: (item: entityDto) => <InStoreEntityItem {...item} />, accept: PushEntity }}>
                        <ButtonInGroup children={<img className='icon-sm' src='/icon/dragon.svg' />} /></Modal.Root>
                    <Modal.Root modal={Modal.PushToSession} props={{ renderItem: (item: objectDto) => <InStoreObjectItem {...item} />, accept: PushObject }}>
                        <ButtonInGroup children={<img className='icon-sm' src='/icon/object.svg' />} /></Modal.Root>
                    <Modal.Root modal={Modal.ImgCarousel}>
                        <ButtonInGroup children={<img className='icon-sm' src='/icon/img-carousel.svg' />} /></Modal.Root>
                    <Modal.Root modal={Modal.Notes}>
                        <ButtonInGroup children={<img className='icon-sm' src='/icon/edit.svg' />} /></Modal.Root>
                </GroupButton>
            </div>
        </div>
    )
}
