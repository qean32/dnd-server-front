import React from "react"
import { GroupContainer } from "../component/general"
import { LeftSideForum } from "../component/shared"
import { ForumColumn, PostItem, Search, TextInfo } from "../component/ui"
import { fakePost } from "../export"
import { Page } from "../component/general/hoc"


export const ForumPage = () => {
    return (
        <Page size="w-[75%]">
            <div className="flex gap-10">
                <LeftSideForum />
                <CentlarSideForum />
            </div>
        </Page>
    )
}

const CentlarSideForum: React.FC<{}> = ({ }: {}) => {
    return (
        <div className="relative w-full">
            <TextInfo title="Форум" />
            <Search />
            <ForumColumn />
            <GroupContainer
                array={fakePost}
                Component={PostItem}
                propsName="post"
            />
        </div>
    )
}