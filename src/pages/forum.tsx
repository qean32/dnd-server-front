import { DefaultSetPage } from "../component/general"
import { ButtonInGroup, Post, Search } from "../component/ui"

export const ForumPage = () => {
    return (
        <DefaultSetPage>
            <div className="relative">
                <div className="absolute left-0 -translate-x-full pr-4 pt-6">
                </div>
                <div className="pt-5 pb-3">
                    <p className="text-4xl">D&D Belive Форум</p>
                    <div className="line mt-3"></div>
                    <p className="text-xl mt-3">zxccused</p>
                </div>
                <div className="flex justify-between w-1/2">
                    <ButtonInGroup className="w-full" fn={() => { }}><p>D&D</p></ButtonInGroup>
                    <ButtonInGroup className="w-full" fn={() => { }}><p>ВЕБ</p></ButtonInGroup>
                    <ButtonInGroup className="w-full" fn={() => { }}><p>ПРОЧЕЕ</p></ButtonInGroup>
                </div>
                <Search />
                <div className="py-3 grid" style={{ gridTemplateColumns: '5fr 1fr 1fr 1fr' }}>
                    <p>Тема & Описание</p>
                    <p>Автор</p>
                    <p>Раздел</p>
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