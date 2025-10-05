import { LeftSideGame } from "../component/general"
import { GameArea, HeightToolGame } from "../component/shared"
import { Token } from "../component/ui"

export const GamePage = () => {

    return (
        <>
            <LeftSideGame />
            <HeightToolGame />
            <main className="w-[100%] h-[90vh] relative z-0">
                <GameArea>
                    <Token />
                    <Token />
                </GameArea>
            </main >
        </>
    )
}