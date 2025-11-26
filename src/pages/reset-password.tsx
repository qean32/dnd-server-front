import { ResetPasswordForm } from "@component/case/form"
import { title } from "@/export"
import { usePage } from "@lib/castom-hook"
import { PageWindow } from "@/component/master/h-order-component"

export const ResetPassword = () => {
    const { } = usePage(title.editProfile)

    return (
        <PageWindow><ResetPasswordForm /></PageWindow>
    )
}