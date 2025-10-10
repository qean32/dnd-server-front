import React from "react";
import { Carousel } from "../component/ui";
import { useBoolean } from "../lib/castom-hook";

export const MainPage = () => {
    const { boolean, swap } = useBoolean(true)

    React.useEffect(() => {
    }, [boolean])
    return (
        <main>
            <Carousel />
            <div onClick={swap}>
            </div>
        </main>
    );
}