import React from "react";
import { AddTag, Button, Carousel, Checkbox, FileInput, IconAndText, ImgInput, PasswordInput, Select, TextInput } from "../component/ui";
import { useBoolean } from "../lib/castom-hook";
import { RangeSlider } from "../component/ui/range-slider";

export const TestPage = () => {
    const { boolean, swap } = useBoolean(false)
    const [value, setValue] = React.useState({ min: 0, max: 100 });
    return (
        <main>
            <Carousel />
            <div className="flex flex-col gap-5 p-5">
                <RangeSlider min={0} max={100} step={5} value={value} onChange={setValue} />
                <p>The min value is: <span>{value.min}</span></p>
                <p>The max value is: <span>{value.max}</span></p>
                <Button className="px-2"><img src="/icon/dragon.svg" alt="" /></Button>
                <Button><img src="/icon/dragon.svg" alt="" /><p>кнопка</p></Button>
                <div className="w-1/4 flex flex-col gap-5">
                    <TextInput placeHolder="text" />
                    <PasswordInput placeHolder="text" />
                    <Select options={[
                        <IconAndText icon={<img src='/icon/human.svg' />} title='персонажи' />,
                        <IconAndText icon={<img src='/icon/dragon.svg' />} title='бестиарий' />,
                        <IconAndText icon={<img src='/icon/object.svg' />} title='обьекты' />,
                        <IconAndText icon={<img src='/icon/queue.svg' />} title='очередь' />
                    ]} />
                    <ImgInput title="тайтл" />
                    <FileInput />
                    <Checkbox fn={swap} title="соглашение" value={boolean} />
                </div>
                <AddTag />

            </div>
        </main>
    );
}