import { GroupContainer } from "@component/master"
import { Page } from "@component/master/h-order-component"
import { ScrollTop, Search, TextInfo } from "@component/ui"
import { UserItem } from "@component/ui/item"
import { title } from "@/export"
import { fakeUser } from "@/fake-data"
import { usePage } from "@lib/castom-hook"

export const CommunityPage = () => {
    const { } = usePage(title.communty)

    return (
        <Page size="w-[70%]">
            <ScrollTop />
            <div className="relative">
                <TextInfo title="Сообщество" />
                <Search />
                <GroupContainer
                    array={fakeUser}
                    className="pt-5"
                    component={UserItem}
                    propsName="user"
                />
            </div>
        </Page>
    )
}