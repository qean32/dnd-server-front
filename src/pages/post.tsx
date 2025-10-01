import { CommentInput } from "../component/shared"
import { Comment } from "../component/ui"

export const PostPage = () => {
    return (
        <>
            <div className="py-2 px-3" style={{ borderRadius: '0px' }}>
                <p>пост</p>
            </div>
            <div className="px-3 py-2">
                <p className="py-2">КОМЕНТАРИИ</p>
                <Comment />
                <Comment />
                <CommentInput />
            </div>
        </>
    )
}