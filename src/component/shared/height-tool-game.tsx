import React from 'react'
import { ButtonInGroup, GroupButton } from '../ui'
import { EntityModal, NotesModal, ObjectModal } from '../children/modal'
import { useBoolean } from '../../lib/castom-hook'

interface Props {
}


export const HeightToolGame: React.FC<Props> = ({ }: Props) => {
    // const clickHandler = () => toast(dispath, "create-entity", { name: 'Гоблин' })
    const { swap: swapNotesView, boolean: notesView } = useBoolean()
    const { swap: swapObjestView, boolean: objectView } = useBoolean()
    const { swap: swapEntityView, boolean: entityView } = useBoolean()

    return (
        <div className='fixed flex z-10 top-[50px] right-35 gap-3'>
            <NotesModal swap={swapNotesView} view={notesView} />
            <EntityModal swap={swapEntityView} view={entityView} />
            <ObjectModal swap={swapObjestView} view={objectView} />
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
                    <ButtonInGroup fn={swapObjestView} children={<img className='icon-sm' src='/icon/object.svg' />} />
                    <ButtonInGroup fn={swapEntityView} children={<img className='icon-sm' src='/icon/dragon.svg' />} />
                    <ButtonInGroup fn={() => { }} children={<img className='icon-sm' src='/icon/map.svg' />} />
                    <ButtonInGroup fn={() => { }} children={<img className='icon-sm' src='/icon/tool.svg' />} />
                </GroupButton>
            </div>
        </div>
    )
}
