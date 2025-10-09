import React from "react";
import { DefaultSetModal } from "../component/general/default-set-modal";
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
                <DefaultSetModal children={<div className="p-5 bg-color-light">zxc</div>} view={boolean} />
            </div>
        </main>
    );
}