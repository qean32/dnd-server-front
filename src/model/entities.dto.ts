import { idDto } from "./id.dto"
import { coordinateDto } from "./position.dto"
import { userDto } from "./user.dto"

interface abstractEntity extends idDto {
    source: sourceDto
    position?: coordinateDto
    name: string
    path: string
}

interface sourceDto extends idDto {
    name: string
}

type statusDto = 'live' | 'dead' | 'stan' | 'hidden'

export interface entityDto extends abstractEntity {
    idInBestiary: number
    description: string
    status: statusDto
    size: 1 | 2 | 3
    initiative: number
}

export interface characterDto extends entityDto {
    user: userDto
}

export interface mapDto extends Omit<abstractEntity, "position"> {
}

export interface objectDto extends abstractEntity {
    status: statusDto
}