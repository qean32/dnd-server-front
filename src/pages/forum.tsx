import { DefaultSetPage } from "../component/general"
import { Post, Search } from "../component/ui"

export const ForumPage = () => {
    return (
        <DefaultSetPage size="w-[60%]">
            <div className="relative">
                <div className="absolute left-0 -translate-x-full pr-4 pt-6">
                </div>
                <div className="pt-5 pb-3">
                    <p className="text-4xl">D&D Belive Форум</p>
                    <div className="line mt-3"></div>
                    <p className="text-xl mt-3">zxccused</p>
                </div>
                <Search />
                <div className="py-3 grid" style={{ gridTemplateColumns: '5fr 1fr 1fr 1fr' }}>
                    <p>Тема & Описание</p>
                    <p>Автор</p>
                    <p>Тема</p>
                    <p>Просмотры</p>
                </div>
                <div>
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                </div>
            </div>
        </DefaultSetPage>
    )
}