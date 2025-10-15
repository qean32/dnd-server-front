import React from "react";
import { rangeSliderValueDto } from "../../model";
import { cn, MapToArray, NumberToArray } from "../../lib/function";


interface Props {
    min: number
    max: number
    value: rangeSliderValueDto,
    step: number
    onChange: Function
    map?: Map<string, string>
}

export const RangeSlider: React.FC<Props> = ({ min, max, value, step, onChange, map }: Props) => {
    const [minValue, setMinValue] = React.useState(value ? value.min : min);
    const [maxValue, setMaxValue] = React.useState(value ? value.max : max);

    React.useEffect(() => {
        if (value) {
            setMinValue(value.min);
            setMaxValue(value.max);
        }
    }, [value]);

    const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const newMinVal = Math.min(+e.target.value, maxValue - step);
        if (!value) setMinValue(newMinVal);
        onChange({ min: newMinVal, max: maxValue });
    };

    const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const newMaxVal = Math.max(+e.target.value, minValue + step);
        if (!value) setMaxValue(newMaxVal);
        onChange({ min: minValue, max: newMaxVal });
    };

    const minPos = ((minValue - min) / (max - min)) * 100;
    const maxPos = ((maxValue - min) / (max - min)) * 100;

    return (
        <div className="">
            {map && <div className="">{map.get(value.min.toString())} - {map.get(value.max.toString())}</div>}
            {!map && <div className="">{value.min} - {value.max}</div>}
            <div className="wrapper">
                <div className="input-wrapper">
                    <input
                        className="input"
                        type="range"
                        value={minValue}
                        min={min}
                        max={max}
                        step={step}
                        onChange={handleMinChange}
                    />
                    <input
                        className="input"
                        type="range"
                        value={maxValue}
                        min={min}
                        max={max}
                        step={step}
                        onChange={handleMaxChange}
                    />
                </div>

                <div className="control-wrapper">
                    <div className="control" style={{ left: `${minPos}%` }} />
                    <div className="rail">
                        <div
                            className="inner-rail"
                            style={{ left: `${minPos}%`, right: `${100 - maxPos}%` }}
                        />
                    </div>
                    <div className="control" style={{ left: `${maxPos}%` }} />
                </div>
            </div>
            <div className="flex justify-between w-full -translate-x-2">
                {map && MapToArray(map).map(item => {
                    return <p key={item.key} className="-rotate-45 translate-y-2/3" style={{ width: 1 / (map.size) + '%', fontSize: '10px' }}>{item.value}</p>
                })}
                {!map && NumberToArray(min, max + step, step).map(item => {
                    return <p key={item} className={cn("-rotate-45 text-sm text-center", `w-1/${max - min}`)}>{item}</p>
                })}
            </div>
        </div>
    );
};