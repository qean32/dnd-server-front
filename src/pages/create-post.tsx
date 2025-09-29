import { DftLayout } from "../component/general"
import { Button, File, GroupTag, Tag } from "../component/ui"

export const CreatePostPage = () => {
    return (
        <DftLayout>
            <div className="flex justify-between pb-4">
                <div className="flex">
                    <p className="font-30">НАЗВАНИЕ</p>
                    <GroupTag>
                        <Tag tag={{ color: "", text: "zxc" }} />
                        <Tag tag={{ color: "", text: "zxc1" }} />
                        <Tag tag={{ color: "", text: "zxc3" }} />
                    </GroupTag>
                </div>
                <div className="flex gap-2">
                    <Button children={<img src="/icon/upload.svg" />} />
                    <Button children={<p className="px-2">предпросмотр</p>} />
                    <Button children={<p className="px-2">отправить</p>} />
                </div>
            </div>
            <textarea placeholder="Ваш пост!" className="container p-2 px-3 h-[600px]"></textarea>
            <div className="flex flex-col gap-2">
                <File />
                <File />
            </div>
        </DftLayout>
    )
}