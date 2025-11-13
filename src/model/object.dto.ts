import { coordinateDto } from "./position.dto"

export interface objectDto {
    id: number
    name: string
    position: coordinateDto
    path: string
    view: boolean
}