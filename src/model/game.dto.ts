import { entityDto, mapDto, objectDto } from "."

export interface gameDto {
    id: string
    name: string
    currentMap: mapDto
    maps: mapDto[]
    mapsData: Map<string, {
        objects: objectDto[]
        entities: entityDto[]
    }>
}