import { LogInForm, SignInForm } from "../component/children/form"
import { DefaultSetPage } from "../component/general"
import { AuthBG } from "../component/shared"

export const AuthPage = () => {
    return (
        <DefaultSetPage className="pt-10" size="w-[50%]">
            <div className="bg-color-dark h-3/4 rounded-md flex relative py-15">
                <AuthBG />
                <SignInForm />
                <LogInForm />
            </div>
        </DefaultSetPage>
    )
}