import { ResetPasswordForm } from "@component/case/form"
import { Page } from "@component/master/h-order-component"
import { AuthBackground } from "@component/ui"
import { title } from "@/export"
import { usePage } from "@lib/castom-hook"

export const ResetPassword = () => {
    const { } = usePage(title.editProfile)

    return (
        <Page className="pt-10" size="w-[50%]">
            <div className="w-full flex justify-center h-[40vh]">
                <div className="bg-color-dark rounded-lg w-full flex relative py-15">
                    <AuthBackground text=" " />
                    <ResetPasswordForm />
                </div>
            </div>
        </Page>
    )
}