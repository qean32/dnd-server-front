import React from 'react'
import { mapMonthKey } from '../../export'
import { RangeSliderGroup } from '.'
import { AddTag } from '.'
import { Button } from '../ui'

interface Props {
}


export const LeftSideForum: React.FC<Props> = ({ }: Props) => {
    return (
        <div className="bg-color-dark w-2/6 min-w-[280px] max-w-2/6 h-fit py-5 px-7 flex-1 mt-6 rounded-lg">
            <p className="text-2xl font-bold">ФИЛЬТРЫ</p>
            <RangeSliderGroup
                slider={{
                    max: 2025,
                    min: 2023,
                    step: 1,
                }}
                title="Года"
            />
            <RangeSliderGroup
                slider={{
                    max: 12,
                    min: 1,
                    step: 1,
                    map: mapMonthKey
                }}
                title="Месяца"
            />
            <AddTag className="pt-5 min-h-[200px]" />
            <Button className='w-full mt-5 border-0'><p>Сбросить</p></Button>
        </div>
    )
}
