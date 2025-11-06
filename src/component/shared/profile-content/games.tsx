import { fakePost } from "../../../fake-data"
import { Modal } from "../../children/modal"
import { GameItem, PlusButton } from "../../ui"


export const Games: React.FC<{}> = ({ }: {}) => {
    return (
        <div className='grid gap-5 p-5 grid-cols-7'>
            {fakePost.slice(0, 9).map((__, _) =>
                <GameItem key={_} id={_ + 1} name={'Первая'} />
            )}
            <Modal.Set Modal={Modal.AddGame}>
                <PlusButton className='h-[85px] w-1/9 min-w-[140px] px-5' iconSize='icon-sm' />
            </Modal.Set>
        </div>
    )
}