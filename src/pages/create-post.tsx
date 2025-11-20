import { Page } from "@component/master/h-order-component"
import { title } from "@/export"
import { usePage } from "@lib/castom-hook"
import { CreatePostForm } from "@/component/case/form"

export const CreatePost = () => {
    const { } = usePage(title.createPost)

    return (
        <Page><CreatePostForm /></Page>
    )
}
