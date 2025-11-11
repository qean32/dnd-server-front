import { Link } from "react-router-dom"
import { Page } from "../component/general/hoc"
import { UserInfo } from "../component/ui"
import { ProfileContentSwith } from "../component/ui/profile-content-swith"
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

                <div className="bg-color-dark rounded-sm p-5 mb-5">
                    <p>ПРИЧИНЫ БЛОКИРОВКИ</p>
                    <div className="grid grid-cols-2">
                        <p>дата блокировки: </p>
                        <p>20.11.2025</p>
                        <p>время до разблокировки:</p>
                        <p>14 лет</p>
                        <p>администратор выдавший блокировку:</p>
                        <Link to={''}>zxccursed</Link>
                    </div>
                </div>
            </Page>
        </>
    )
}