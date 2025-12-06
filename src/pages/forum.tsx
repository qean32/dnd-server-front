import { Page } from "@component/master/h-order-component"
import { TextInfo } from "@component/ui"
import { DepartmentItem } from "@component/ui/item"
import { title } from "@/export"
import { usePage } from "@lib/castom-hook"


export const Forum = () => {
    const { } = usePage(title.forum)

    return (
        <Page size="w-[70%]">
            <div className="flex gap-5">
                <div className="w-full">
                    <TextInfo title="Форум" />

                    <div className="flex flex-col gap-7">
                        <DepartmentItem path="/img/carousel-item-3.jpg" count={42}
                            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi facere saepe vel quisquam quibusdam, adipisci minima officiis nemo explicabo est." name="web" />
                        <DepartmentItem path="/img/carousel-item-3.jpg" count={42}
                            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi facere saepe vel quisquam quibusdam, adipisci minima officiis nemo explicabo est." name="d&d" />
                        <DepartmentItem path="/img/carousel-item-3.jpg" count={42}
                            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi facere saepe vel quisquam quibusdam, adipisci minima officiis nemo explicabo est." name="прочее" />
                        <DepartmentItem path="/img/carousel-item-3.jpg" count={42}
                            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi facere saepe vel quisquam quibusdam, adipisci minima officiis nemo explicabo est." name="faq" />
                    </div>
                </div>
            </div>
        </Page>
    )
}