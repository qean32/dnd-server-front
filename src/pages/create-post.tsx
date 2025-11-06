import { Link } from "react-router-dom"
import { Page } from "../component/general/hoc"
import { Button, FakeTextInput, File } from "../component/ui"
import { positionDto } from "../model"
import React from "react"

export const CreatePostPage = () => {
    const [pos, setPos] = React.useState<positionDto>({ left: 0, top: 0 })
    const [text, setText] = React.useState('')
    const ref = React.useRef(null)

    const changeHandler = (e: React.ChangeEvent<HTMLTextAreaElement> | any) => {
        const key = e.keyCode
        if (key == '13') {
            setText(prev => { console.log(prev + ' </br >'); return prev + ' </br >' })
        } else {
            setText(prev => prev + String.fromCharCode(key))
        }

        if (ref.current) {
            console.log(ref.current);
            // @ts-ignore
            var rects = ref.current.getClientRects(),
                lastRect = rects[rects.length - 1],
                top = lastRect.top - e.target.scrollTop,
                left = lastRect.left + lastRect.width;
        }
    }
    return (
        <Page>
            <div className="absolute z-50" style={{ ...pos }}>zxczxc</div>
            <div className="flex justify-between pb-4">
                <FakeTextInput className="items-end flex" title="НАЗВАНИЕ ПОСТА" />
                <div className="flex gap-4 items-end">
                    <Link to={''}><p className="underline">Предпросмотр</p></Link>
                    <Button className="py-2 px-3 h-full"><img src="/icon/upload.svg" /></Button>
                    <Button className="py-2 px-4"><p>Готово</p></Button>
                </div>
            </div>
            <textarea placeholder="Описание" className="w-full bg-color-dark rounded-md min-h-[160px] p-2 px-3"></textarea>
            <textarea placeholder="Ваш пост!" className="container p-2 px-3 h-[600px]" value={text} onKeyDown={changeHandler}>
            </textarea>
            <p ref={ref} className="w-[1152px] text-wrap" dangerouslySetInnerHTML={{ __html: text }}></p>
            <div className="flex flex-col gap-2">
                <File className="bg-color-dark py-4 px-5" />
            </div>
        </Page>
    )
}