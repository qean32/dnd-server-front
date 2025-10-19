import React from "react";
import { rangeSliderValueDto } from "../../model";


interface Props {
    min: number
    max: number
    value: rangeSliderValueDto,
    step: number
    onChange: Function
}

export const RangeSlider: React.FC<Props> = ({ min, max, value, step, onChange }: Props) => {
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
        <div className="px-2">
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
        </div>
    );
};