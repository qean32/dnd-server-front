import { DefaultSetPage, GroupContainer } from "../component/general"
import { Direction, ForumColumn, PostItem, Search, TextInfo } from "../component/ui"
import { fakePost } from "../export"

export const ForumPage = () => {
    return (
        <DefaultSetPage size="w-[70%]">
            <div className="flex gap-10">
                <div className="w-1/6 flex-1 mt-6 rounded-lg">
                    <p className="text-2xl font-bold">ФИЛЬТРЫ</p>
                    <p>Год</p>
                    <p>Месяц</p>
                    <p>Тэги</p>
                </div>
                <div className="relative w-4/5">
                    <TextInfo title="Форум" />
                    <Direction />
                    <Search />
                    <ForumColumn />
                    <GroupContainer
                        array={fakePost}
                        Component={PostItem}
                        propsName="post"
                    />
                </div>
            </div>
        </DefaultSetPage>
    )
}