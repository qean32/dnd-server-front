import React from 'react'
import { IconAndCount, IconAndNumber } from '@/component/ui'

interface Props {
}


export const CountBlock: React.FC<Props> = ({ }: Props) => {
    return (
        <div className="flex gap-2 -translate-x-1">
            <div className="">
                <IconAndCount count={98} icon="/icon/like-no-fill.svg" iconAction="/icon/like-fill.svg" action={false} />
            </div>
            <IconAndNumber count={29} icon="/icon/view.svg" />
        </div>
    )
}
