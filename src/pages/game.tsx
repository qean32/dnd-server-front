import { AddCharacterInGame } from "../component/case/modal/add-character-in-game-modal"
import { LeftSideGame } from "../component/shared"
import { GameArea, HeightToolGame } from "../component/shared"
import { useAppDispatch, useAppSelector } from "../lib/castom-hook/redux"
import { swapAddCharacterInGamePath } from "../store/add-character-in-game-path"

export const GamePage = () => {
    const dispath = useAppDispatch()
    const { href } = useAppSelector(state => state.addCharacterInGame)

    return (
        <>
            <LeftSideGame />
            <main className="h-full z-0 relative">
                <HeightToolGame />
                <GameArea />
            </main >
            <AddCharacterInGame swap={() => dispath(swapAddCharacterInGamePath({ href: '' }))} view={!!href} />
        </>
    )
}