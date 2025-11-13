import { AddCharacterInGame } from "@component/case/modal/add-character-in-game-modal"
import { ViewImg } from "@component/case/modal/img-view-modal"
import { GameArea, ToolGameButton, ToolGame } from "@component/shared"
import { usePage } from "@lib/castom-hook"
import { useAppDispatch, useAppSelector } from "@lib/castom-hook/redux"
import { getParamName } from "@lib/function"
import { swapAddCharacterInGamePath } from "@/store/add-character-in-game-path-store"
import { swapViewImg } from "@/store/view-img-store"

export const SessionPage = () => {
    const dispath = useAppDispatch()
    const { } = usePage(getParamName())
    const { href } = useAppSelector(state => state.addCharacterInGame)
    const { href: hrefImg } = useAppSelector(state => state.viewImg)

    return (
        <>
            <ToolGame />
            <main className="h-full z-0 relative">
                <ToolGameButton />
                <GameArea />
            </main >
            <AddCharacterInGame swap={() => dispath(swapAddCharacterInGamePath({ href: '' }))} view={!!href} />
            <ViewImg swap={() => dispath(swapViewImg({ href: '' }))} view={!!hrefImg} />
        </>
    )
}