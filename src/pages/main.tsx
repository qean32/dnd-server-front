import { Carousel, MainBanner } from "@/component/ui";
import { title } from "@/export";
import { cn } from "@/lib/function";
import { useHandlerScroll, usePage } from "@lib/castom-hook";

export const Main = () => {
    const { } = usePage(title.main)
    const { refHandler, boolean } = useHandlerScroll(-100)
    const { refHandler: refHandler_, boolean: boolean_ } = useHandlerScroll(-100)

    return (
        <main className="pb-5">
            <Carousel />
            <MainBanner />
            <div className="w-full flex justify-center" ref={refHandler}>
                <div className={cn("w-8/12 py-10 transition-20", (boolean && 'translate-x-5'))}>
                    <p className="text-7xl">ПОЧЕМУ МЫ?</p>
                    <ul>
                        <li>Лучшие сервера</li>
                        <li>Отличный интерфейс</li>
                        <li>Лучшая атмосфера</li>
                        <li></li>
                    </ul>
                </div>
            </div>
            <div className="w-full flex justify-center" ref={refHandler_}>
                <div className={cn("w-8/12 py-10 transition-20 flex items-end flex-col", (boolean_ && '-translate-x-5'))}>
                    <p className="text-7xl">ИГРАЙ С НАМИ!</p>
                </div>
            </div>
        </main>
    );
}