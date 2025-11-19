import { idDto } from "./id.dto"
import { coordinateDto } from "./position.dto"

interface abstractEntity extends idDto {
    source: sourceDto
    position?: coordinateDto
    name: string
    path: string
    view?: boolean
}

interface sourceDto extends idDto {
    name: string
}

export interface entityDto extends abstractEntity {
    discription: string
    status: 'live' | 'dead' | 'stan'
    size: number
    initiative: number
}

export interface mapDto extends abstractEntity {
    size: coordinateDto
}

export interface objectDto extends abstractEntity {
}