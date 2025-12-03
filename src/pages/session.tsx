import { PushCharacterInGame } from "@component/case/modal/push-character-in-game-modal"
import { ViewImg } from "@component/case/modal/img-view-modal"
import { ToolGameButton, ToolGame } from "@component/shared"
import { usePage } from "@lib/castom-hook"
import { useAppDispatch, useAppSelector } from "@lib/castom-hook/redux"
import { getParamName } from "@lib/function"
import { swapViewImg } from "@/store/view-img-store"
import React from "react"
import { GameArea } from "@/component/master"
import { swapCharacterPush } from "@/store/view-content-store"

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
    const { user } = useAppSelector(state => state.viewContent)
    const { path: pathImg } = useAppSelector(state => state.viewImg)

    return (
        <>
            <PushCharacterInGame swap={() => dispath(swapCharacterPush(null))} view={!!user} />
            <ViewImg swap={() => dispath(swapViewImg({ path: '' }))} view={!!pathImg} />
        </>
    )
}