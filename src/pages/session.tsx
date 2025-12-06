import { PushCharacterInGame } from "@component/case/modal/push-character-in-game-modal"
import { ViewImg } from "@component/case/modal/img-view-modal"
import { ToolGameButton, ToolGame } from "@component/shared"
import { useEntityMore, usePage, useQueryParam } from "@lib/castom-hook"
import { getParamName } from "@lib/function"
import React from "react"
import { GameArea } from "@/component/master"
import { qParamName } from "@/export"
import { EntityMore } from "@/component/case/modal/entity-more-modal"

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
    const { allQ, clearQ } = useQueryParam('')
    const { clearTmp, tmpEntity } = useEntityMore()


    return (
        <>
            <PushCharacterInGame swap={clearQ} view={!!allQ[qParamName.pCharacter]} />
            <ViewImg swap={clearQ} view={!!allQ[qParamName.vImg]} />
            {/* @ts-ignore */}
            <EntityMore swap={clearTmp} view={tmpEntity?.id} />
        </>
    )
}