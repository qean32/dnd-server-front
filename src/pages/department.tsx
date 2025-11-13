import React from "react"
import { GroupContainer } from "@component/master"
import { PostColumn, ScrollTop, Search, TextInfo } from "@component/ui"
import { fakePost } from "@/fake-data"
import { Page } from "@component/master/h-order-component"
import { useParams } from "react-router-dom"
import { PostItem } from "@component/ui/item"
import { FilterForum } from "@component/shared"
import { usePage } from "@lib/castom-hook"
import { getParamName } from "@lib/function"


export const DepartmentPage = () => {
    const { } = usePage(getParamName())

    return (
        <Page size="w-[75%]">
            <div className="flex gap-10">
                <FilterForum />
                <RightSideForum />
            </div>
        </Page>
    )
}

const RightSideForum: React.FC<{}> = ({ }: {}) => {
    const { name } = useParams()

    return (
        <div className="relative w-full">
            <ScrollTop />
            <TextInfo title={name ? name.toUpperCase() : ''} />
            <Search />
            <PostColumn />
            <div className="pb-5">
                <PostItem likes={0} {...fakePost[10]} fixed={true} />
            </div>
            <GroupContainer
                array={fakePost}
                component={PostItem}
                propsName="post"
            />
        </div>
    )
}