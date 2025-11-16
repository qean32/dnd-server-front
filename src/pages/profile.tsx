import { Link } from "react-router-dom"
import { Page } from "@component/master/h-order-component"
import { BanReason, UserInfo } from "@component/ui"
import { ProfileContent, ProfileContentSwith } from "@component/shared/profile-content"
import { usePage } from "@lib/castom-hook"
import { getParamName } from "@lib/function"

export const Profile = () => {
    const { } = usePage(getParamName())

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
            <BanReason />
        </>
    )
}