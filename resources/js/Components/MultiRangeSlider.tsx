import { useState, useRef, useEffect, useCallback } from "react";

interface MultiRangeSliderProps {
    min: number;
    max: number;
    onChange: ({ min, max }: { min: number; max: number }) => void;
}

const MultiRangeSlider: React.FC<MultiRangeSliderProps> = ({
    min,
    max,
    onChange,
}) => {
    const [minVal, setMinVal] = useState(min);
    const [maxVal, setMaxVal] = useState(max);
    const minValRef = useRef(min);
    const maxValRef = useRef(max);
    const range = useRef<HTMLDivElement>(null);

    // Convert to percentage
    const getPercent = useCallback(
        (value: number) => Math.round(((value - min) / (max - min)) * 100),
        [min, max]
    );

    // Set width of the range to decrease from the left side
    useEffect(() => {
        if (maxValRef.current !== null) {
            const minPercent = getPercent(minVal);
            const maxPercent = getPercent(maxValRef.current);

            if (range.current !== null) {
                range.current.style.left = `${minPercent}%`;
                range.current.style.width = `${maxPercent - minPercent}%`;
            }
        }
    }, [minVal, getPercent]);

    // Set width of the range to decrease from the right side
    useEffect(() => {
        if (minValRef.current !== null) {
            const minPercent = getPercent(minValRef.current);
            const maxPercent = getPercent(maxVal);

            if (range.current !== null) {
                range.current.style.width = `${maxPercent - minPercent}%`;
            }
        }
    }, [maxVal, getPercent]);

    // Get min and max values when their state changes
    useEffect(() => {
        onChange({ min: minVal, max: maxVal });
    }, [minVal, maxVal, onChange]);

    return (
        <div className="relative w-full">
            <input
                type="range"
                min={min}
                max={max}
                value={minVal}
                onChange={(event) => {
                    const value = Math.min(
                        Number(event.target.value),
                        maxVal - 1
                    );
                    setMinVal(value);
                    minValRef.current = value;
                }}
                className="absolute w-full h-2 appearance-none bg-transparent accent-white/0"
                style={{ zIndex: minVal > max - 100 ? "5" : "1" }}
            />
            <input
                type="range"
                min={min}
                max={max}
                value={maxVal}
                onChange={(event) => {
                    const value = Math.max(
                        Number(event.target.value),
                        minVal + 1
                    );
                    setMaxVal(value);
                    maxValRef.current = value;
                }}
                className="absolute w-full h-2 appearance-none bg-transparent accent-white/0"
            />

            <div className="relative h-2">
                <div className="absolute z-10 left-0 right-0 bottom-0 bg-gray-300 h-2" />
                <div
                    ref={range}
                    className="absolute z-30 left-0 bottom-0 bg-indigo-500 h-2"
                />
                <div
                    className="absolute z-30 w-3 h-3 bg-indigo-500 rounded-full top-0 transform -translate-x-1/2"
                    style={{ left: `${getPercent(minVal)}%` }}
                />
                <div
                    className="absolute z-30 w-3 h-3 bg-indigo-500 rounded-full top-0 transform -translate-x-1/2"
                    style={{ left: `${getPercent(maxVal)}%` }}
                />
            </div>
        </div>
    );
};

export default MultiRangeSlider;
