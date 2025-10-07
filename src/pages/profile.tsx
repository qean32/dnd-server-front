import { DefaultSetPage } from "../component/general"
import { Ava } from "../component/ui"

export const ProfilePage = () => {
    return (
        <DefaultSetPage>
            <div className="flex gap-5">
                <Ava size="ava-lg" path="" className="bg-color-dark" />
                <p className="f-30">NICKNAME</p>
            </div >
            <div className="container mt-5 flex flex-col items-center">
                <div className="flex gap-2 pt-3 pb-2 px-4 w-[100%]">
                    <p className="cursor-pointer" >Персонажи</p>
                    <p className="cursor-pointer" >Посты</p>
                    <p className="cursor-pointer" >Игры</p>
                </div>
                <div className="w-[96%]">
                    <hr />
                </div>
                <div className="flex-1 w-[100%] flex justify-center items-center flex-col gap-2">
                    <img src="/icon/repair.svg" width={200} />
                    <p>у вас нет записей!</p>
                </div>
            </div>
            <div className="pt-1">
                <p>изменить профиль</p>
            </div>
        </DefaultSetPage>
    )
}