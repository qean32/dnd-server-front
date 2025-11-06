import { LeftSideGame } from "../component/shared"
import { GameArea, HeightToolGame } from "../component/shared"

export const GamePage = () => {

    return (
        <>
            <LeftSideGame />
            <main className="h-full z-0 relative">
                <HeightToolGame />
                <GameArea />
            </main >
        </>
    )
}