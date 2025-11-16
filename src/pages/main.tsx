import { Carousel, MainBanner } from "@/component/ui";
import { title } from "@/export";
import { usePage } from "@lib/castom-hook";

export const Main = () => {
    const { } = usePage(title.main)

    return (
        <main className="pb-5">
            <Carousel />
            <MainBanner />
            <div className="">
                <p className="text-7xl">ПОЧЕМУ МЫ?</p>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                </ul>
            </div>
        </main>
    );
}