import { LeftSideGame } from "../component/shared"
import { GameArea, HeightToolGame } from "../component/shared"
import { Token } from "../component/ui"

export const GamePage = () => {

    return (
        <>
            <LeftSideGame />
            <HeightToolGame />
            <main className="w-[100%] h-[90vh] relative z-0">
                <GameArea
                    height={600}
                    width={800}
                >
                    <Token />
                    <Token />
                </GameArea>
            </main >
        </>
    )
}