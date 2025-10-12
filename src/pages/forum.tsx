import { DefaultSetPage, GroupContainer } from "../component/general"
import { Direction, ForumColumn, Post, Search, TextInfo } from "../component/ui"

export const ForumPage = () => {
    return (
        <DefaultSetPage>
            <div className="relative">
                <TextInfo title="Форум" />
                <Direction />
                <Search />
                <ForumColumn />
                <GroupContainer
                    Component={Post}
                    propsName="post"
                />
            </div>
        </DefaultSetPage>
    )
}