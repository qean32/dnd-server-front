import { LogIn, SignIn } from "../component/children/form"
import { DefaultSetPage } from "../component/general"
import { AuthBG } from "../component/shared"

export const AuthPage = () => {
    return (
        <DefaultSetPage className="pt-6">
            <div className="bg-color-dark rounded-md flex relative py-15">
                <AuthBG />
                <SignIn />
                <LogIn />
            </div>
        </DefaultSetPage>
    )
}