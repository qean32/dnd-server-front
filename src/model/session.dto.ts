import { entityDto, mapDto, objectDto, userDto } from "."
import { characterDto } from "./entities.dto"

export interface sessionDto {
    id: string
    name: string
    currentMap: mapDto
    DungeonMaster: userDto
    maps: mapDto[]
    characters: characterDto[]
    mapsData: mapsDataDto,
}

export interface mapsDataDto {
    [key: string]: {
        entities: entityDto[]
        objects: objectDto[]
        queue: any[]
    }
}