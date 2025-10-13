export type toastDto = {
    key: toastKeyDto,
    id: number,
    payload: toastPayloadDto,
    view: boolean
}

export type toastPayloadDto = {
    name?: string
    path?: string
    // other ?
}

export type toastKeyDto = 'create-entity' | 'event'