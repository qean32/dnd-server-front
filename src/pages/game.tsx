import { RightSideGame } from "../component/general"
import { HeightToolGame } from "../component/shared"

export const GamePage = () => {
    return (
        <>
            <RightSideGame />
            <HeightToolGame />
            <main className="w-[100%] h-[100vh]">
                <div className="w-[1400px] h-[750px] rounded-lg bg-color-dark fixed top-[121px] left-[400px] cursor-pointer"></div>
            </main >
        </>
    )
}