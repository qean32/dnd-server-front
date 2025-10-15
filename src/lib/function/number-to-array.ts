export const NumberToArray = (min: number, max: number, step: number): number[] => {
    const array = [];

    for (let i = min; i < max; i += step) {
        array.push(i)
    }

    return array
}