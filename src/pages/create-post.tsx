import { Link } from "react-router-dom"
import { Page } from "../component/general/hoc"
import { Button, FakeTextInput, File } from "../component/ui"

export const CreatePostPage = () => {
    return (
        <Page>
            <div className="flex justify-between pb-4">
                <FakeTextInput className="items-end flex" title="НАЗВАНИЕ ПОСТА" />
                <div className="flex gap-4 items-end">
                    <Link to={''}><p className="underline">Предпросмотр</p></Link>
                    <Button className="py-2 h-full px-3"><img src="/icon/upload.svg" /></Button>
                    <Button className="py-2"><p>Готово</p></Button>
                </div>
            </div>
            <textarea placeholder="Описание" className="w-full bg-color-dark rounded-md min-h-[160px] p-2 px-3"></textarea>
            <textarea placeholder="Ваш пост!" className="container p-2 px-3 h-[600px]"></textarea>
            <div className="flex flex-col gap-2">
                <File className="bg-color-dark py-4 px-5 rounded-md" />
            </div>
        </Page>
    )
}