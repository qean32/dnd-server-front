export type toastDto = {
    key: toastKeyDto,
    id: number,
    payload: toastPayloadDto,
    view: boolean
}

export type toastPayloadDto = {
    name?: string
    path?: string
    text?: string
    // other ?
}

export type toastKeyDto =
    'add-entity'
    | 'event-message'
    | 'message'