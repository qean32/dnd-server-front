import React from "react"
import { GroupContainer } from "../component/general"
import { LeftSideForum } from "../component/shared"
import { ForumColumn, PostItem, Search, TextInfo } from "../component/ui"
import { fakePost } from "../fake-data"
import { Page } from "../component/general/hoc"
import { useParams } from "react-router-dom"


export const DepartmentPage = () => {
    return (
        <Page size="w-[75%]">
            <div className="flex gap-10">
                <LeftSideForum />
                <RightSideForum />
            </div>
        </Page>
    )
}

const RightSideForum: React.FC<{}> = ({ }: {}) => {
    const { name } = useParams()

    return (
        <div className="relative w-full">
            <TextInfo title={name ? name.toUpperCase() : ''} />
            <Search />
            <ForumColumn />
            <div className="pb-5">
                <PostItem {...fakePost[10]} fixed={true} />
            </div>
            <GroupContainer
                array={fakePost}
                Component={PostItem}
                propsName="post"
            />
        </div>
    )
}