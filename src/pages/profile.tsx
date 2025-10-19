import { Link } from "react-router-dom"
import { Page } from "../component/general/hoc"
import { UserInfo } from "../component/ui"
import { ProfileContentSwith } from "../component/ui/profile-content-swith"
import { ProfileContent } from "../component/shared/profile-content"

export const ProfilePage = () => {
    return (
        <Page className="h-full">
            <div className="flex-col flex h-full pb-3 overflow-hidden">
                <UserInfo />
                <ProfileContentSwith />
                <ProfileContent />
                <Link to='/edit-profile'><p className="cursor-pointer underline">изменить профиль</p></Link>
            </div>
        </Page >
    )
}