import { DefaultSetPage, GroupContainer } from "../component/general"
import { Search, TextInfo, User } from "../component/ui"

export const CommunityPage = () => {
    return (
        <DefaultSetPage>
            <div className="relative">
                <TextInfo title="Сообщество" />
                <Search />
                <GroupContainer
                    className="pt-10"
                    Component={User}
                    propsName="user"
                />
            </div>
        </DefaultSetPage>
    )
}