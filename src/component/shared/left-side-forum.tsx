import React from 'react'
import { mapMonthKey } from '../../export'
import { RangeSliderGroup } from '.'
import { AddTag } from '.'
import { Button } from '../ui'
import { Link } from 'react-router-dom'

interface Props {
}


export const LeftSideForum: React.FC<Props> = ({ }: Props) => {
    return (
        <div className="w-2/6 min-w-[310px] max-w-2/6 h-fit flex-1 mt-6 rounded-md bg-color-dark p-5">
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
            <AddTag className="pt-5 min-h-[100px]" />
            <div className='w-fit'><Link to={'/create-post'}><Button variant='acceess' className='p-2 mt-5'><img src='/icon/edit.svg' /></Button></Link></div>
            <Button className='mt-4 px-4.5 py-3'><p>Сбросить</p></Button>
        </div>
    )
}
