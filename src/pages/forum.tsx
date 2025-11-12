import { Page } from "../component/general/hoc"
import { DepartmentItem, TextInfo } from "../component/ui"


export const ForumPage = () => {
    return (
        <Page size="w-[70%]">
            <div className="flex gap-5">
                <div className="w-full">
                    <TextInfo title="Форум" />

                    <div className="flex flex-col gap-7">
                        <DepartmentItem path="/img/dnd.jpg"
                            discription="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi facere saepe vel quisquam quibusdam, adipisci minima officiis nemo explicabo est." name="web" />
                        <DepartmentItem path="/img/dnd.jpg"
                            discription="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi facere saepe vel quisquam quibusdam, adipisci minima officiis nemo explicabo est." name="d&d" />
                        <DepartmentItem path="/img/dnd.jpg"
                            discription="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi facere saepe vel quisquam quibusdam, adipisci minima officiis nemo explicabo est." name="прочее" />
                        <DepartmentItem path="/img/dnd.jpg"
                            discription="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi facere saepe vel quisquam quibusdam, adipisci minima officiis nemo explicabo est." name="faq" />
                    </div>
                </div>
            </div>
        </Page>
    )
}