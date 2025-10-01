import { DftLayout } from "../component/general"
import { Button, TextInput } from "../component/ui"

export const AuthPage = () => {
    return (
        <DftLayout className="pt-6">
            <div className="w-[100%] h-[700px] bg-color-dark rounded-md flex">
                <div className="w-1/2 h-[100%] py-15 flex justify-center bg-color-darkness rounded-md">
                    <div className="fit-content flex flex-col gap-3">
                        <p className="f-30">РЕГИСТРАЦИЯ</p>
                        <div className="flex-1 w-[300px]">
                            <TextInput placeHolder="никнейм" />
                            <TextInput placeHolder="почта" />
                            <TextInput placeHolder="пароль" />
                            <TextInput placeHolder="повторите пароль" />
                        </div>
                        <Button children={<p>Регистрация</p>} className="bg-color" />
                    </div>
                </div>
                <div className="w-1/2 h-[100%] py-15 flex justify-center">
                    <div className="fit-content flex flex-col gap-3">
                        <p className="f-30">ВХОД</p>
                        <div className="flex-1 w-[300px]">
                            <TextInput placeHolder="никнейм или почта" />
                            <TextInput placeHolder="пароль" />
                        </div>
                        <Button children={<p>Вход</p>} className="bg-color" />
                    </div>
                </div>
            </div>
        </DftLayout>
    )
}