import { Page } from "@component/master/h-order-component"
import { title } from "@/export"
import { usePage } from "@lib/castom-hook"

export const Faq = () => {
    const { } = usePage(title.faq)

    return (
        <Page className="pt-10" size="w-[50%]">
            <></>
        </Page>
    )
}