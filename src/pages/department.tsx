import React from "react"
import { GroupContainer } from "@component/master"
import { PostColumn, ScrollTop, Search, TextInfo } from "@component/ui"
import { f_post } from "@/f"
import { Page } from "@component/master/h-order-component"
import { useParams } from "react-router-dom"
import { PostItem } from "@component/ui/item"
import { FilterForum } from "@component/shared"
import { usePage } from "@lib/castom-hook"
import { getParamName } from "@lib/function"


export const Department = () => {
    const { } = usePage(getParamName())

    return (
        <Page size="w-[75%]">
            <div className="flex gap-10">
                <FilterForum />
                <MainSideForum />
            </div>
        </Page>
    )
}

const MainSideForum: React.FC<{}> = ({ }: {}) => {
    const { name } = useParams()

    return (
        <div className="relative w-full">
            <ScrollTop />
            <TextInfo title={name ? name.toUpperCase() : ''} />
            <Search />
            <PostColumn />
            <div className="pb-4">
                <PostItem {...f_post[10]} fixed={true} className="pl-2" />
            </div>
            <GroupContainer
                items={f_post}
                renderItem={(item) => <PostItem {...item} className="pl-2" />}
            />
        </div>
    )
}