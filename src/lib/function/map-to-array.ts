export const MapToArray = (map: Map<any, any>): any[] => {
    return Array.from(map, ([key, value]) => {
        return { key, value }
    })
}