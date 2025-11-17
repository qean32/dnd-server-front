import { Carousel, MainBanner } from "@/component/ui";
import { title } from "@/export";
import { cn } from "@/lib/function";
import { useHandlerScroll, usePage } from "@lib/castom-hook";

export const Main = () => {
    const { } = usePage(title.main)
    const { refHandler, boolean } = useHandlerScroll(-100)

    return (
        <main className="pb-5">
            <Carousel />
            <MainBanner />
            <div className="w-full flex justify-center" ref={refHandler}>
                <div className={cn("w-7/12 py-10 transition-07", (boolean && 'translate-y-10'))}>
                    <p className="text-7xl">ПОЧЕМУ МЫ?</p>
                    <ul>
                        <li>Лучшие сервера</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                    </ul>
                </div>
            </div>
        </main>
    );
}