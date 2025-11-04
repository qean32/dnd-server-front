import { coordinateDto } from "./position.dto"

export interface entityDto {
    id: number
    name: string
    position: coordinateDto
    path: string
    discription: string
    status: 'live' | 'dead' | 'stan'
    view: boolean
    size: number
}