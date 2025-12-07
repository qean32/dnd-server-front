export const getSizeInPixel = (code: 1 | 2 | 3 | 4) => {
    if (code == 1) {
        return 60
    }
    if (code == 2) {
        return 70
    }
    if (code == 3) {
        return 120
    }
    return 170
}