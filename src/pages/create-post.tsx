import { Link } from "react-router-dom"
import { Page } from "@component/master/h-order-component"
import { Button, FakeTextInput, File } from "@component/ui"
import { title } from "@/export"
import { usePage } from "@lib/castom-hook"

export const CreatePost = () => {
    const { } = usePage(title.createPost)

    return (
        <Page>
            <div className="flex justify-between pb-4">
                <FakeTextInput className="items-end flex" title="НАЗВАНИЕ ПОСТА" />
                <div className="flex gap-4 items-end">
                    <Link to={''}><p className="underline">Предпросмотр</p></Link>
                    <Button variant="acceess" className="py-2 px-3 h-full"><img src="/icon/upload.svg" /></Button>
                    <Button variant="acceess" className="py-2 px-4"><p>Готово</p></Button>
                </div>
            </div>
            <textarea placeholder="Описание" className="w-full bg-color-dark rounded-md min-h-[160px] p-2 px-3"></textarea>
            <textarea placeholder="Ваш пост!" className="bg-color-dark w-full rounded-sm p-2 px-3 h-[600px]">
            </textarea>
            <p className="w-[1152px] text-wrap"></p>
            <div className="flex flex-col gap-2">
                <File className="bg-color-dark py-4 px-5" />
            </div>
        </Page>
    )
}
