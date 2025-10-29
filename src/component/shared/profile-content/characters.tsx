import { fakePost } from "../../../fake-data"
import { useBoolean } from "../../../lib/castom-hook"
import { Modal } from "../../children/modal"
import { CharacterLinkItem, PlusButton } from "../../ui"


export const Characters: React.FC<{}> = ({ }: {}) => {
    const { boolean, swap } = useBoolean()

    return (
        <div className='flex gap-5 flex-wrap p-5 rounded-md'>
            {fakePost.slice(0, 6).map((__, _) =>
                <CharacterLinkItem link='https://aternia.games/i/dnd/character_sheet/show/10399ffb-e071-4c6d-b7f2-3f4fcee3fab0' key={_} number={_ + 1} name='Клиган Клиган' />
            )}
            <Modal.AddCharacter swap={swap} view={boolean} />
            <PlusButton fn={swap} className='w-[80px]' iconSize='icon-sm' />
        </div>
    )
}