import { EditProfileForm } from "../component/case/form"
import { Page } from "../component/general/hoc"
import { AuthBG } from "../component/ui"

export const EditProfilePage = () => {
    return (
        <Page className="pt-10" size="w-[50%]">
            <div className="w-full flex justify-center h-[70vh]">
                <div className="bg-color-dark rounded-lg w-full flex relative py-15">
                    <AuthBG text=" " />
                    <EditProfileForm />
                </div>
            </div>
        </Page>
    )
}