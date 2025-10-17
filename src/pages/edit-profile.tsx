import { EditProfileForm } from "../component/children/form"
import { Page } from "../component/general/hoc"
import { AuthBG } from "../component/shared"

export const EditProfilePage = () => {
    return (
        <Page className="pt-10" size="w-[50%]">
            <div className="bg-color-dark h-3/4 rounded-md flex relative py-15">
                <AuthBG text=" " />
                <EditProfileForm />
            </div>
        </Page>
    )
}