import { Carousel } from "../component/ui";
import { title } from "../export";
import { usePage } from "../lib/castom-hook";

export const MainPage = () => {
    const { } = usePage(title.main)

    return (
        <main>
            <Carousel />
        </main>
    );
}