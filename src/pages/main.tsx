import {
    BlockOne,
    BlockThree,
    BlockTwo,
    Carousel,
    LargeLogo,
    MainBanner
} from "@/component/ui/main";
import { title } from "@/export";
import { usePage } from "@lib/castom-hook";

export const Main = () => {
    const { } = usePage(title.main)
    console.log(process.env);


    return (
        <main>
            <Carousel />
            <MainBanner />
            <BlockOne />
            <BlockTwo />
            <BlockThree />
            <LargeLogo />
            <Carousel />
        </main >
    );
}