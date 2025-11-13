import { Page } from "@component/master/h-order-component"
import { PostBody } from "@component/shared"
import { Crumb } from "@component/ui"
import { usePage } from "@lib/castom-hook"
import { getParamName } from "@lib/function"

export const PostPage = () => {
    const { } = usePage(getParamName())

    return (
        <Page size="w-[60%]">
            <Crumb />
            <PostBody />
        </Page>
    )
}