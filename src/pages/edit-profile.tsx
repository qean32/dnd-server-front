import { DefaultSetPage } from "../component/general"
import { Button, ImgInput, TextInput } from "../component/ui"

export const EditProfilePage = () => {
    return (
        <DefaultSetPage className="pt-6">
            <div className="w-1/2 h-[700px] bg-color-dark rounded-md flex translate-x-1/2">
                <div className="w-[100%] h-[100%] py-15 flex justify-center rounded-md">
                    <div className="fit-content flex flex-col gap-3">
                        <p className="f-30">РЕДАКТИРОВАНИЕ</p>
                        <div className="flex-1 w-[300px]">
                            <TextInput placeHolder="никнейм" />
                            <TextInput placeHolder="пароль" />
                            <br />
                            <TextInput placeHolder="предыдущий пароль" />
                            <ImgInput title="аватар профиля" />
                        </div>
                        <Button children={<p>Сохранить</p>} className="bg-color" />
                    </div>
                </div>
            </div>
        </DefaultSetPage>
    )
}