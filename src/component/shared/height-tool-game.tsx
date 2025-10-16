import React from 'react'
import { ButtonInGroup, GroupButton } from '../ui'
import { toast } from '../../lib/function/toast'
import { useAppDispatch } from '../../lib/castom-hook/redux'
import { NotesModal } from '../children/modal'
import { useBoolean } from '../../lib/castom-hook'

interface Props {
}


export const HeightToolGame: React.FC<Props> = ({ }: Props) => {
    const dispath = useAppDispatch()
    const clickHandler = () => toast(dispath, "create-entity", { name: 'Гоблин' })
    const { swap: swapNotesView, boolean: notesView } = useBoolean()

    return (
        <div className='fixed flex z-10 top-[50px] right-35 gap-3'>
            <NotesModal swap={swapNotesView} view={notesView} />
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
                    <ButtonInGroup fn={swapNotesView} children={<img className='icon-sm' src='/icon/edit.svg' />} />
                    <ButtonInGroup fn={() => { }} children={<img className='icon-sm' src='/icon/object.svg' />} />
                    <ButtonInGroup fn={clickHandler} children={<img className='icon-sm' src='/icon/dragon.svg' />} />
                    <ButtonInGroup fn={() => { }} children={<img className='icon-sm' src='/icon/map.svg' />} />
                    <ButtonInGroup fn={() => { }} children={<img className='icon-sm' src='/icon/tool.svg' />} />
                </GroupButton>
            </div>
        </div>
    )
}
