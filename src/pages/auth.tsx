import { LogIn, SignIn } from "../component/form"
import { DftLayout } from "../component/general"
import { AuthBG } from "../component/shared"

export const AuthPage = () => {
    return (
        <DftLayout className="pt-6">
            <div className="bg-color-dark rounded-md flex relative">
                <AuthBG />
                <SignIn />
                <LogIn />
            </div>
        </DftLayout>
    )
}