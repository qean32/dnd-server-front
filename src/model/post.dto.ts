export type postDto = {
    title: string,
    discription: string,
    tags: string
    author: {
        name: string
        id: number
    }
    views: number
}