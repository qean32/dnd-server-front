import { positionDto } from "./position.dto"

export interface objectDto {
    id: number
    name: string
    position: positionDto
    path: string
    view: boolean
}