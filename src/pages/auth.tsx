import { LogInForm, SignInForm } from "../component/case/form"
import { Page } from "../component/general/hoc"
import { AuthBG } from "../component/ui"

export const AuthPage = () => {
    return (
        <Page className="pt-10" size="w-[50%]">
            <div className="w-full flex justify-center h-[800px]">
                <div className="bg-color-dark h-3/4 rounded-lg w-full flex relative py-15">
                    <AuthBG />
                    <SignInForm />
                    <LogInForm />
                </div>
            </div>
        </Page>
    )
}