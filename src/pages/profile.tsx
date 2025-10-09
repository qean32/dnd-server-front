import { DefaultSetPage } from "../component/general"
import { Ava, Post } from "../component/ui"

export const ProfilePage = () => {
    return (
        <DefaultSetPage size="w-[60%]">
            <div className="pt-4">
                <div className="flex gap-5 items-end">
                    <Ava size="ava-lg" path="" className="bg-color-dark" />
                    <p className="text-4xl">NICKNAME</p>
                </div >
                <div className="mt-5 flex flex-col items-center">
                    <div className="flex gap-2 pt-3 pb-2 w-[100%]">
                        <p className="cursor-pointer text-xl" >Персонажи</p>
                        <p className="cursor-pointer text-xl" >Посты</p>
                        <p className="cursor-pointer text-xl" >Игры</p>
                    </div>
                    {/* <div className="flex-1 w-[100%] flex justify-center items-center flex-col gap-2">
                        <p>у вас нет записей!</p>
                    </div> */}
                </div>

                <div className="w-full">
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                </div>
                <div className="pt-1">
                    <p className="cursor-pointer">изменить профиль</p>
                </div>
            </div>
        </DefaultSetPage>
    )
}