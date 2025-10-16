import React from "react"
import { DefaultSetPage, GroupContainer } from "../component/general"
import { LeftSideForum } from "../component/shared"
import { ForumColumn, PostItem, Search, TextInfo } from "../component/ui"
import { fakePost } from "../export"
export const ForumPage = () => {
    return (
        <DefaultSetPage size="w-[75%]">
            <div className="flex gap-10">
                <LeftSideForum />
                <CentlarSideForum />
            </div>
        </DefaultSetPage>
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