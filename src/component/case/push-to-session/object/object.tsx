import React from 'react'
import { Button } from '@component/ui'
import { cn } from '@/lib/function'
import { PushFromJSON } from './push-from-json'
import { PushFromForm } from './push-from-form'
import { useBoolean } from '@/lib/castom-hook'

interface Props {
    swap: React.MouseEventHandler<HTMLButtonElement>
}


export const PushObject: React.FC<Props> = ({ swap }: Props) => {
    const part = useBoolean(true)

    return (
        <div className="w-[25%] h-full flex flex-col json-push relative">
            <div className="w-full overflow-hidden h-full">
                <div className={cn("w-[200%] flex h-full transition-300", (part.boolean && "-translate-x-1/2"))}>
                    <PushFromForm part={part}>
                        <Button fn={swap} variant='ghost'><p>Отмена</p></Button>
                    </PushFromForm>
                    <PushFromJSON part={part}>
                        <Button fn={swap} variant='ghost'><p>Отмена</p></Button>
                    </PushFromJSON>
                </div>
            </div>
        </div>
    )
}
