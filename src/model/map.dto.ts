import { coordinateDto } from "./position.dto"

export interface mapDto {
    id: number
    path: string
    name: string
    size: coordinateDto
}