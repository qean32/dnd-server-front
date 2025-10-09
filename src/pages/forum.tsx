import { DefaultSetPage } from "../component/general"
import { Post, Search } from "../component/ui"

export const ForumPage = () => {
    return (
        <DefaultSetPage size="w-[50%]">
            <div className="py-5">
                <p className="text-4xl">D&D Belive Forum</p>
                <div className="h-[2px] bg-white mt-2"></div>
                <p className="text-xl mt-3">zxccused</p>
            </div>
            <Search />
            <div className="py-3 grid" style={{ gridTemplateColumns: '5fr 1fr 1fr 1fr' }}>
                <p>Тема & Описание</p>
                <p>Автор</p>
                <p>Тема</p>
                <p>Просмотры</p>
            </div>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </DefaultSetPage>
    )
}