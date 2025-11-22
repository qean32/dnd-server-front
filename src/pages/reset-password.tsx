import { ResetPasswordForm } from "@component/case/form"
import { Page } from "@component/master/h-order-component"
import { title } from "@/export"
import { usePage } from "@lib/castom-hook"

export const ResetPassword = () => {
    const { } = usePage(title.reserPassword)

    return (
        <Page className="pt-10" size="w-[50%]">
            <div className="flex justify-center w-full pt-10">

                <ResetPasswordForm />
            </div>
        </Page>
    )
}