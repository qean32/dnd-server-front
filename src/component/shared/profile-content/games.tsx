import { fakePost } from "../../../fake-data"
import { useBoolean } from "../../../lib/castom-hook"
import { Modal } from "../../children/modal"
import { GameItem, PlusButton } from "../../ui"


export const Games: React.FC<{}> = ({ }: {}) => {
    const { boolean, swap } = useBoolean()
    return (
        <div className='grid gap-5 p-5 grid-cols-7'>
            {fakePost.slice(0, 9).map((__, _) =>
                <GameItem key={_} id={_ + 1} name={'Первая'} />
            )}
            <Modal.AddGame swap={swap} view={boolean} />
            <PlusButton fn={swap} className='h-[85px] w-1/9 min-w-[140px] px-5' iconSize='icon-sm' />
        </div>
    )
}