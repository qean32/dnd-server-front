import { Link } from "react-router-dom"
import { Page } from "../component/general/hoc"
import { BanReason, UserInfo } from "../component/ui"
import { ProfileContentSwith } from "../component/shared/profile-content/profile-content-swith"
import { ProfileContent } from "../component/shared/profile-content"

export const ProfilePage = () => {
    return (
        <>
            <Page size="w-[65%]">
                <div className="flex-col flex h-full pb-3 overflow-hidden">
                    <UserInfo />
                    <ProfileContentSwith />
                    <ProfileContent />
                    <Link to='/edit-profile'><p className="cursor-pointer underline mt-3 pl-2">изменить профиль</p></Link>
                </div>
            </Page >
            <Page size="w-[65%]">
                <BanReason />
            </Page>
        </>
    )
}