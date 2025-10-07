import { DefaultSetPage } from "../component/general"
import { Post, Search } from "../component/ui"

export const PostsPage = () => {
    return (
        <DefaultSetPage size="w-[45%]">
            <div className="container pb-2">
                <div className="py-2 px-2">
                    <Search />
                </div>
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </DefaultSetPage>
    )
}