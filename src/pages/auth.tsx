import { LogInForm, SignInForm } from "@component/case/form"
import { Page } from "@component/master/h-order-component"
import { AuthBG } from "@component/ui"
import { title } from "@/export"
import { usePage } from "@lib/castom-hook"

export const Auth = () => {
    const { } = usePage(title.authorization)

    return (
        <Page className="pt-10" size="w-[50%]">
            <div className="w-full flex justify-center h-[70vh]">
                <div className="bg-color-dark rounded-lg w-full flex relative py-15">
                    <AuthBG />
                    <SignInForm />
                    <LogInForm />
                </div>
            </div>
        </Page>
    )
}