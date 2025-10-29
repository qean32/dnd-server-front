import { ChangePasswordForm } from "../component/children/form"
import { Page } from "../component/general/hoc"

export const ChangePasswordPage = () => {
    return (
        <Page className="pt-10" size="w-[50%]">
            <div className="flex justify-center w-full pt-10">

                <ChangePasswordForm />
            </div>
        </Page>
    )
}