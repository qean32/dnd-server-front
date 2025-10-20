import { Page } from "../component/general/hoc"
import { DepartmentItem, TextInfo } from "../component/ui"


export const ForumPage = () => {
    return (
        <Page size="w-[65%]">
            <div className="flex gap-5">
                <div className="w-full">
                    <TextInfo title="Форум" />

                    <div className="flex flex-col gap-7">
                        <DepartmentItem discription="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi facere saepe vel quisquam quibusdam, adipisci minima officiis nemo explicabo est." name="web" />
                        <DepartmentItem discription="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi facere saepe vel quisquam quibusdam, adipisci minima officiis nemo explicabo est." name="d&d" />
                        <DepartmentItem discription="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi facere saepe vel quisquam quibusdam, adipisci minima officiis nemo explicabo est." name="прочее" />
                        <DepartmentItem discription="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi facere saepe vel quisquam quibusdam, adipisci minima officiis nemo explicabo est." name="faq" />
                    </div>
                </div>
            </div>
        </Page>
    )
}