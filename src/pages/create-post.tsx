import { Page } from "@component/master/h-order-component"
import { title } from "@/export"
import { usePage } from "@lib/castom-hook"
import { CreatePostContent } from "@/component/shared"

export const CreatePost = () => {
    const { } = usePage(title.createPost)

    return (
        <Page><CreatePostContent /></Page>
    )
}
