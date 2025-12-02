import { idDto } from "./id.dto"
import { coordinateDto } from "./position.dto"
import { userDto } from "./user.dto"

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

type statusDto = 'live' | 'dead' | 'stan'

export interface entityDto extends abstractEntity {
    description: string
    status: statusDto
    size: number
    initiative: number
}

export interface characterDto extends entityDto {
    user: userDto
}

export interface mapDto extends abstractEntity {
}

export interface objectDto extends abstractEntity {
}