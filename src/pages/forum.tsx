import React from "react"
import { DefaultSetPage, GroupContainer } from "../component/general"
import { LeftSideForum } from "../component/shared"
import { Direction, ForumColumn, PostItem, Search, TextInfo } from "../component/ui"
import { fakePost } from "../export"
export const ForumPage = () => {
    return (
        <DefaultSetPage size="w-[70%]">
            <div className="flex gap-15">
                <LeftSideForum />
                <CentlarSideForum />
            </div>
        </DefaultSetPage>
    )
}

const CentlarSideForum: React.FC<{}> = ({ }: {}) => {
    return (
        <div className="relative w-4/5">
            <TextInfo title="Форум" />
            <Direction />
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