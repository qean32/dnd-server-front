import { Page } from "@component/master/h-order-component"
import { PostContent } from "@component/shared"
import { Crumb } from "@component/ui"
import { usePage } from "@lib/castom-hook"
import { getParamName } from "@lib/function"

export const PostPage = () => {
    const { } = usePage(getParamName())

    return (
        <Page size="w-[65%]">
            <Crumb />
            <PostContent />
        </Page>
    )
}