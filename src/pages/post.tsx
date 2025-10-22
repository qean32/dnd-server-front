import { Link } from "react-router-dom"
import { Page } from "../component/general/hoc"
import { Ava, IconAndCount, IconAndNumber } from "../component/ui"

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
            <p className="text-4xl mb-1.5">НАЗВАНИЕ</p>
            <div className="rounded-sm">
                <div className="flex items-end gap-2 py-3 pt-4">
                    <Ava size="ava-sm" path="/img/auth-bg.jpg" />
                    <p>zxccursed</p>
                    <p>20.05.2002</p>
                    <p># 764</p>
                </div>
                <div className="flex flex-col min-h-[200px]">
                    <p className="text-xl pb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error fugiat, ducimus perspiciatis numquam architecto reprehenderit in hic aliquam. Ullam, natus!</p>
                    <div>статья</div>
                    <div className="flex gap-2 -translate-x-1">
                        <IconAndCount count={99} icon="/icon/like-no-fill.svg" iconAction="/icon/like-fill.svg" action={false} />
                        <IconAndNumber count={29} icon="/icon/view.svg" />
                    </div>
                </div>
            </div>
        </Page>
    )
}