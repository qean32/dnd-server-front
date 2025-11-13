import { coordinateDto } from "./position.dto"

export interface entityDto {
    id: number
    position: coordinateDto
    name: string
    path: string
    discription: string
    status: 'live' | 'dead' | 'stan'
    size: number
    view: boolean
}