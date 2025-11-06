import { fakePost } from "../../../fake-data"
import { Modal } from "../../children/modal"
import { CharacterLinkItem, PlusButton } from "../../ui"


export const Characters: React.FC<{}> = ({ }: {}) => {

    return (
        <div className='grid gap-5 p-5 grid-cols-12'>
            {fakePost.slice(0, 14).map((__, _) =>
                <CharacterLinkItem link='https://aternia.games/i/dnd/character_sheet/show/10399ffb-e071-4c6d-b7f2-3f4fcee3fab0' key={_} number={_ + 1} name='Клиган Клиган' />
            )}
            <Modal.Set Modal={Modal.AddCharacter}>
                <PlusButton className='h-[100px] w-[80px]' iconSize='icon-sm' />
            </Modal.Set>
        </div>
    )
}