import { Link } from "react-router-dom"
import { fakePost } from "../../../fake-data"
import { ForumColumn, PostItem, PlusButton } from "../../ui"
import { useBoolean } from "../../../lib/castom-hook"
import React from "react"

interface Props {
    view: boolean
}

export const Posts: React.FC<Props> = ({ view }: Props) => {
    const { on, off } = useBoolean(view)

    React.useEffect(() => {
        if (view) {
            on()
        } else {
            off()
        }
    }, [view])

    if (!view) {
        return null
    }

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