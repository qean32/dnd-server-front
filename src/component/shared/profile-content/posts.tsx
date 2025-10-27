import { Link } from "react-router-dom"
import { fakePost } from "../../../fake-data"
import { ForumColumn, PostItem, PlusButton } from "../../ui"

export const Posts: React.FC<{}> = ({ }: {}) => {

    return (
        <div className='px-5 pt-2 pb-5'>
            <ForumColumn />
            {fakePost.slice(0, 6).map(item => {
                return <PostItem {...item} key={item.title} />
            })}
            <Link to={'/create-post'}><PlusButton className='h-[100px] w-full mt-2 px-5' iconSize='icon-sm' /></Link>
        </div>
    )
}