import { AddCharacterInGame } from "@component/case/modal/add-character-in-game-modal"
import { ViewImg } from "@component/case/modal/img-view-modal"
import { ToolGameButton, ToolGame } from "@component/shared"
import { usePage } from "@lib/castom-hook"
import { useAppDispatch, useAppSelector } from "@lib/castom-hook/redux"
import { getParamName } from "@lib/function"
import { swapAddCharacterInGamePath } from "@/store/add-character-in-game-path-store"
import { swapViewImg } from "@/store/view-img-store"
import React from "react"
import { GameArea } from "@/component/master"

export const Session = () => {
    const { } = usePage(getParamName())

    return (
        <>
            <ToolGame />
            <main className="h-full z-0 relative">
                <ToolGameButton />
                <GameArea />
            </main >
            <Modal />
        </>
    )
}

const Modal: React.FC = () => {
    const dispath = useAppDispatch()
    const { href } = useAppSelector(state => state.addCharacterInGame)
    const { href: hrefImg } = useAppSelector(state => state.viewImg)
    return (
        <>
            <AddCharacterInGame swap={() => dispath(swapAddCharacterInGamePath({ href: '' }))} view={!!href} />
            <ViewImg swap={() => dispath(swapViewImg({ href: '' }))} view={!!hrefImg} />
        </>
    )
}