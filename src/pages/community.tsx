import { GroupContainer } from "../component/general"
import { Page } from "../component/general/hoc"
import { ScrollTop, Search, TextInfo, UserItem } from "../component/ui"
import { fakeUser } from "../fake-data"

export const CommunityPage = () => {
    return (
        <Page size="w-[70%]">
            <ScrollTop />
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