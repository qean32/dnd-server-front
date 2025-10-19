import { LeftSideGame } from "../component/shared"
import { GameArea, HeightToolGame } from "../component/shared"

export const GamePage = () => {

    return (
        <>
            <LeftSideGame />
            <HeightToolGame />
            <main className="h-full fixed z-0">
                <GameArea />
            </main >
        </>
    )
}