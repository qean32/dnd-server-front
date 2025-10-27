import { EditProfileForm } from "../component/children/form"
import { Page } from "../component/general/hoc"
import { AuthBG } from "../component/ui"

export const EditProfilePage = () => {
    return (
        <Page className="pt-10" size="w-[50%]">
            <div className="w-full flex justify-center h-[800px]">
                <div className="bg-color-dark h-3/4 rounded-lg w-11/12 flex relative py-15">
                    <AuthBG text=" " />
                    <EditProfileForm />
                </div>
            </div>
        </Page>
    )
}