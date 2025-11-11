import { entityDto, mapDto, objectDto, userDto } from "."

export interface gameDto {
    id: string
    name: string
    currentMap: mapDto
    host: userDto
    maps: mapDto[]
    mapsData: {
        [key: string]: {
            entities: entityDto[]
            objects: objectDto[]
        }
    }
}