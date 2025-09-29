import { RightSideGame } from "../component/general"
import { HeightToolGame } from "../component/shared"

export const TestPage = () => {
    return (
        <>
            <RightSideGame />
            <HeightToolGame />
            <main className="w-[100%]" style={{ height: "100vh" }}>
                <div className="w-[1380px] h-[776px]">

                </div>
            </main >
        </>
    )
}