import { Carousel, Logo, MainBanner } from "@/component/ui";
import { nameProject, title } from "@/export";
import { cn } from "@/lib/function";
import { useHandlerScroll, usePage } from "@lib/castom-hook";

export const Main = () => {
    const { } = usePage(title.main)
    const { refHandler, boolean } = useHandlerScroll(-100)
    const { refHandler: refHandler_, boolean: boolean_ } = useHandlerScroll(-100)
    const { refHandler: refHandler__, boolean: boolean__ } = useHandlerScroll(-100)

    return (
        <main>
            <Carousel />
            <MainBanner />
            <div className="w-full flex justify-center mt-10" ref={refHandler}>
                <div className={cn("w-8/12 py-10 transition-700", (boolean ? '' : '-translate-x-10 opacity-20'))}>
                    <p className="text-7xl">ПОЧЕМУ МЫ?</p>
                    <ul className="text-2xl list-disc list-inside">
                        <li>Лучшие сервера</li>
                        <li>Отличный интерфейс</li>
                        <li>Вайбик</li>
                        <li>Работа с комьюнити</li>
                    </ul>
                </div>
            </div>

            <div className="w-full flex justify-center" ref={refHandler_}>
                <div className={cn("w-8/12 py-10 transition-700 flex items-end flex-col", (boolean_ ? '' : 'translate-x-10 opacity-20'))}>
                    <p className="text-7xl">ПАРТИЯ МЕЧТЫ</p>
                </div>
            </div>

            <div className="w-full flex justify-center" ref={refHandler__}>
                <div className={cn("w-8/12 py-10 transition-700", (boolean__ ? '' : 'translate-y-10 opacity-20'))}>
                    <p className="text-7xl">ЧТО ТАКОЕ <span className="text-red-800">D&D</span> ?</p>
                    <p className="text-2xl pt-2">Dungeons & Dragons (D&D, DnD; Подземелья и драконы) — настольная ролевая игра в жанре фэнтези.</p>
                    <p className="text-md">
                        В игре участвуют ведущий (так называемый «мастер») и несколько игроков, число которых варьируется в зависимости от редакции и пожеланий участников. Обычно один игрок руководит в игровом мире действиями одного персонажа. Мастер действует от лица всех неигровых персонажей, описывает окружающую среду и происходящие в ней события.
                        В течение игры каждый участник задаёт действия для своего персонажа, а результаты действий определяются мастером в соответствии с правилами. Случайные события моделируются броском кубика.
                        Иногда решения мастера могут не соответствовать правилам. Это является Золотым правилом игры: «ДМ всегда прав», так называемым «мастерским произволом».</p>
                </div>
            </div>

            <div className="w-full h-[600px] flex-col flex justify-center items-center gap-10 pb-10">
                <Logo size="icon-3xl" />
                <p>{nameProject}</p>
            </div>

            <Carousel />
        </main >
    );
}