import React from 'react'
import { Button } from '@component/ui'
import { cn } from '@/lib/function'
import { AddFromJSON } from './add-from-json'
import { TypeUseBoolen } from '@/lib/castom-hook'
import { AddFromForm } from './add-from-form'

interface Props {
    part: TypeUseBoolen
    swapModal: React.MouseEventHandler<HTMLButtonElement>
}


export const AddMap: React.FC<Props> = ({ part, swapModal }: Props) => {
    return (
        <div className="w-3/12 h-full flex flex-col json-add relative">
            <div className="w-full overflow-hidden h-full">
                <div className={cn("w-[200%] flex h-full transition-03", (part.boolean && "-translate-x-1/2"))}>
                    <AddFromForm part={part}>
                        <Button fn={swapModal} variant='ghost'><p>Отмена</p></Button>
                    </AddFromForm>
                    <AddFromJSON part={part}>
                        <Button fn={swapModal} variant='ghost'><p>Отмена</p></Button>
                    </AddFromJSON>
                </div>
            </div>
        </div>
    )
}
