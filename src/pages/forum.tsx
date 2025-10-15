import { useState } from "react"
import { DefaultSetPage, GroupContainer } from "../component/general"
import { AddTag, Direction, ForumColumn, PostItem, RangeSlider, Search, TextInfo } from "../component/ui"
import { fakePost, mapMonthKey } from "../export"
import { rangeSliderValueDto } from "../model"

export const ForumPage = () => {
    const [value, setValue] = useState<rangeSliderValueDto>({ max: 12, min: 1 })
    return (
        <DefaultSetPage size="w-[70%]">
            <div className="flex gap-10">
                <div className="w-1/6 flex-1 mt-6 rounded-lg">
                    <p className="text-2xl font-bold">ФИЛЬТРЫ</p>
                    <p>Месяц</p>
                    <RangeSlider max={12} min={1} step={1} onChange={setValue} value={value} map={mapMonthKey} />
                    {/* <RangeSlider max={2025} min={2023} step={1} onChange={setValue} value={value} /> */}
                    <AddTag />
                </div>
                <div className="relative w-4/5">
                    <TextInfo title="Форум" />
                    <Direction />
                    <Search />
                    <ForumColumn />
                    <GroupContainer
                        array={fakePost}
                        Component={PostItem}
                        propsName="post"
                    />
                </div>
            </div>
        </DefaultSetPage>
    )
}