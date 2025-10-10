import { Link } from "react-router-dom"
import { DefaultSetPage } from "../component/general"
import { Ava, Post } from "../component/ui"

export const ProfilePage = () => {
    return (
        <DefaultSetPage size="w-[60%]" className="h-full">
            <div className="flex-col flex h-full pb-3">
                <div className="flex gap-6 mt-4">
                    <Ava size="ava-lg" path="" className="bg-color-dark" />
                    <p className="text-4xl">NICKNAME</p>
                </div >

                <div className="mt-5 flex gap-2 pt-3 pb-2 w-[100%]">
                    <p className="cursor-pointer text-xl font-bold" >Персонажи</p>
                    <p className="cursor-pointer text-xl" >Посты</p>
                    <p className="cursor-pointer text-xl" >Игры</p>
                </div>

                <div className="flex-1">
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                </div>
                <Link to='/edit-profile'><p className="cursor-pointer">изменить профиль</p></Link>
            </div>
        </DefaultSetPage >
    )
}