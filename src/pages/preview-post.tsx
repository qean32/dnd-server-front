import { PostInfo, MainBlock, CommentBlock } from "@/component/shared/post"
import { fakeUser } from "@/fake-data"
import { Page } from "@component/master/h-order-component"
import { Crumb } from "@component/ui"
import { usePage } from "@lib/castom-hook"
import { getParamName } from "@lib/function"
import { useParams } from "react-router-dom"

export const PreviewPost = () => {
    const { } = usePage(getParamName())
    const { text } = useParams()

    return (
        <Page size="w-[65%]">
            <Crumb />
            <PostInfo {...fakeUser[0]} email="" />
            <MainBlock text={text} />
            <CommentBlock />
        </Page>
    )
}