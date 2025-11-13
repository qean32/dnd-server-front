import React from 'react'
import { cn, MapToArray, NumberToArray } from '../../lib/function'
import { RangeSlider } from '.'
import { rangeSliderValueDto } from '../../model'

interface Props {
    className?: string
    slider: {
        max: number
        min: number
        step: number
        map?: Map<string, string>
    }
    title: string
}


export const RangeSliderGroup: React.FC<Props> = ({ className, slider: { map, max, min, step }, title }: Props) => {
    const [value, setValue] = React.useState<rangeSliderValueDto>({ max, min })

    return (
        <div className={cn('', className)}>
            <div className="flex py-5 gap-4 justify-between w-full">
                <p className='text-xl'>{title}</p>

                {map && <div className='flex flex-nowrap justify-between max-w-full'>
                    <p>{map.get(value.min.toString())}</p>
                    /
                    <p>{map.get(value.max.toString())}</p>
                </div>}
                {!map && <div className='flex flex-nowrap'>{value.min}/{value.max}</div>}
            </div>

            <RangeSlider max={max} min={min} step={step} onChange={setValue} value={value} />

            <div className="flex justify-between pt-4">
                {map && MapToArray(map).map(item =>
                    <p key={item.key} className='text-sm' style={{ width: 1 / (map.size) + '%' }}>{item.value[0]}</p>
                )}
                {!map && NumberToArray(min, max + step, step).map(item =>
                    <p key={item} className={cn("text-sm text-center", `w-1/${max - min}`)}>{item}</p>
                )}
            </div>

        </div>
    )
}
