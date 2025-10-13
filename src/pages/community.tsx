import { DefaultSetPage, GroupContainer } from "../component/general"
import { Search, TextInfo, UserItem } from "../component/ui"
import { fakeUser } from "../export"

export const CommunityPage = () => {
    return (
        <DefaultSetPage>
            <div className="relative">
                <TextInfo title="Сообщество" />
                <Search />
                <GroupContainer
                    array={fakeUser}
                    className="pt-10"
                    Component={UserItem}
                    propsName="user"
                />
            </div>
        </DefaultSetPage>
    )
}