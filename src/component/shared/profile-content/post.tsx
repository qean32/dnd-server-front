import { Link } from "react-router-dom"
import { fakePost } from "@/fake-data"
import { PostColumn, PlusButton, NoFindData } from "@component/ui"
import { useBoolean } from "@lib/castom-hook"
import React from "react"
import { PostItem } from "@component/ui/item"
import { ViewAuthor } from "@/component/master/h-order-component"

interface Props {
    view: boolean
}

export const Post: React.FC<Props> = ({ view }: Props) => {
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
            <PostColumn />
            {!!fakePost.length &&
                fakePost.slice(0, 6).map(item => {
                    return <PostItem likes={0} {...item} key={item.title} />
                })}
            <NoFindData title="Пользователь не выкладывал статьи" className="min-h-[500px]" view={false} />

            <ViewAuthor>
                <Link to={'/create-post'}><PlusButton className='h-[100px] w-full my-2 px-5' iconSize='icon-md' /></Link>
            </ViewAuthor>
        </div>
    )
}