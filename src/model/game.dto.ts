import { entityDto, mapDto, objectDto } from "."

export interface gameDto {
    id: string
    name: string
    currentMap: mapDto
    maps: mapDto[]
    mapsData: {
        [key: string]: {
            entities: entityDto[]
            objects: objectDto[]
        }
    }
}