import { GroupContainer } from "../component/general"
import { Page } from "../component/general/hoc"
import { Search, TextInfo, UserItem } from "../component/ui"
import { fakeUser } from "../fake-data"

export const CommunityPage = () => {
    return (
        <Page size="w-[65%]">
            <div className="relative">
                <TextInfo title="Сообщество" />
                <Search />
                <GroupContainer
                    array={fakeUser}
                    className="pt-5"
                    Component={UserItem}
                    propsName="user"
                />
            </div>
        </Page>
    )
}