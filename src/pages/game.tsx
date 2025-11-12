import { AddCharacterInGame } from "../component/case/modal/add-character-in-game-modal"
import { ViewImg } from "../component/case/modal/img-view-modal"
import { LeftSideGame } from "../component/shared"
import { GameArea, HeightToolGame } from "../component/shared"
import { useAppDispatch, useAppSelector } from "../lib/castom-hook/redux"
import { swapAddCharacterInGamePath } from "../store/add-character-in-game-path-store"
import { swapViewImg } from "../store/view-img-store"

export const GamePage = () => {
    const dispath = useAppDispatch()
    const { href } = useAppSelector(state => state.addCharacterInGame)
    const { href: hrefImg } = useAppSelector(state => state.viewImg)

    return (
        <>
            <LeftSideGame />
            <main className="h-full z-0 relative">
                <HeightToolGame />
                <GameArea />
            </main >
            <AddCharacterInGame swap={() => dispath(swapAddCharacterInGamePath({ href: '' }))} view={!!href} />
            <ViewImg swap={() => dispath(swapViewImg({ href: '' }))} view={!!hrefImg} />
        </>
    )
}