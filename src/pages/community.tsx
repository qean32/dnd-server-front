import { DefaultSetPage } from "../component/general"
import { Search, User } from "../component/ui"

export const CommunityPage = () => {
    return (
        <DefaultSetPage size="w-[60%]">
            <div className="relative">
                <div className="absolute left-0 -translate-x-full pr-4 pt-6">
                </div>
                <div className="pt-5 pb-3">
                    <p className="text-4xl">D&D Belive Сообщество</p>
                    <div className="line mt-3"></div>
                    <p className="text-xl mt-3">zxccused</p>
                </div>
                <Search />
                <div className="pt-10">
                    <User />
                    <User />
                    <User />
                    <User />
                    <User />
                    <User />
                </div>
            </div>
        </DefaultSetPage>
    )
}