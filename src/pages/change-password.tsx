import { Page } from "../component/general/hoc"
import { Button, PasswordInput, Title } from "../component/ui"

export const ChangePasswordPage = () => {
    return (
        <Page className="pt-10" size="w-[50%]">
            <div className="flex justify-center w-full pt-10">
                <div className="bg-color-dark h-3/4 rounded-lg py-5 pb-8 px-8">
                    <Title className="pb-4">Изменение пароля</Title>
                    <div className="w-[350px]">
                        <PasswordInput placeHolder="Введите пароль" />
                        <PasswordInput placeHolder="Повторите пароль" />
                        <Button variant="acceess" className="p-2 px-3" >Сохранить</Button>
                    </div>
                </div>
            </div>
        </Page>
    )
}