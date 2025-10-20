import { Link } from "react-router-dom"
import { Page } from "../component/general/hoc"

export const PostPage = () => {
    return (
        <Page size="w-[60%]">
            <div className="flex items-center w-fit py-3 rounded-sm gap-2">
                <Link to={'/forum'}><p>Форум</p></Link>
                <img src="/icon/double-arrow.svg" className="icon-sm- rotate-180 opacity-50" />
                <Link to={'/department/d&d'}><p>D&D</p></Link>
                <img src="/icon/double-arrow.svg" className="icon-sm- rotate-180 opacity-50" />
                <p className="cursor-pointer">Как развивается d&d сообщество</p>
            </div>
            <p className="text-4xl pl-0.5 my-5">НАЗВАНИЕ</p>
            <div className="overflow-hidden rounded-sm">
                <div className="h-[50px] bg-color-darkness flex items-center px-3"># 764</div>
                <div className="flex">
                </div>
            </div>
        </Page>
    )
}