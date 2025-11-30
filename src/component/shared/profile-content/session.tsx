import { ViewAuthor } from "@/component/master/h-order-component"
import { fakePost } from "@/fake-data"
import { Modal } from "@component/case/modal"
import { NoFindData, PlusButton } from "@component/ui"
import { SessionItem } from "@component/ui/item"


export const Session: React.FC<{}> = ({ }: {}) => {
    return (
        <div className='flex flex-col py-2'>
            {fakePost.slice(0, 9).map((__, _) =>
                <SessionItem key={_} id={_ + 1} name={'ПерваяПерваяПервая'} />
            )}
            <NoFindData title="Пользователь не выкладывал статьи" className="min-h-[500px]" view={false} />
            <ViewAuthor>
                <Modal.Root modal={Modal.PushSession}>
                    <div className="px-4">
                        <PlusButton className='h-[85px] my-5 mb-2' iconSize='icon-sm' />
                    </div>
                </Modal.Root>
            </ViewAuthor>
        </div>
    )
}