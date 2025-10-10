import { DefaultSetPage } from "../component/general"
import { Button, FakeTextInput, File, GroupTag, Tag } from "../component/ui"

export const CreatePostPage = () => {
    return (
        <DefaultSetPage>
            <div className="flex justify-between pb-4">
                <div className="flex">
                    <FakeTextInput title="НАЗВАНИЕ" />
                    <GroupTag>
                        <Tag tag={{ color: "", text: "zxc" }} />
                        <Tag tag={{ color: "", text: "zxc1" }} />
                        <Tag tag={{ color: "", text: "zxc3" }} />
                    </GroupTag>
                </div>
                <div className="flex gap-4 items-end">
                    <p className="underline">предпросмотр</p>
                    <Button className="h-full px-3" children={<img src="/icon/upload.svg" />} />
                    <Button children={<p className="px-2">готово</p>} />
                </div>
            </div>
            <textarea placeholder="Описание" className="w-full bg-color-dark rounded-lg min-h-[160px] p-2 px-3"></textarea>
            <textarea placeholder="Ваш пост!" className="container p-2 px-3 h-[600px]"></textarea>
            <div className="flex flex-col gap-2">
                <File className="px-3 bg-color-dark" />
                <File className="px-3 bg-color-dark" />
            </div>
        </DefaultSetPage>
    )
}