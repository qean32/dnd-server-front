export const getSizeInPixel = (code: 1 | 2 | 3) => {
    if (code == 1) {
        return 60
    }
    if (code == 2) {
        return 70
    }
    return 120
}