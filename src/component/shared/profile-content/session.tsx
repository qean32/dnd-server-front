import { fakePost } from "@/fake-data"
import { Modal } from "@component/case/modal"
import { PlusButton } from "@component/ui"
import { SessionItem } from "@component/ui/item"


export const Session: React.FC<{}> = ({ }: {}) => {
    return (
        <div className='grid gap-5 p-5 grid-cols-8 adaptive2k-grid-column-9'>
            {fakePost.slice(0, 9).map((__, _) =>
                <SessionItem key={_} id={_ + 1} name={'Первая'} />
            )}
            <Modal.Set modal={Modal.AddSession}>
                <PlusButton className='h-[85px] w-1/9 px-5' iconSize='icon-sm' />
            </Modal.Set>
        </div>
    )
}