import { fakePost } from "../../../fake-data"
import { useBoolean } from "../../../lib/castom-hook"
import { Modal } from "../../children/modal"
import { GameItem, PlusButton } from "../../ui"


export const Games: React.FC<{}> = ({ }: {}) => {
    const { boolean, swap } = useBoolean()
    return (
        <div className='flex gap-5 flex-wrap p-5 rounded-md'>
            {fakePost.slice(0, 7).map((__, _) =>
                <GameItem key={_} id={_ + 1} name={'Первая'} />
            )}
            <Modal.AddGame swap={swap} view={boolean} />
            <PlusButton fn={swap} className='h-[85px] px-5' iconSize='icon-sm' />
        </div>
    )
}